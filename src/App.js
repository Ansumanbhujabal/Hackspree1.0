import { useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import usePlacesAutocomplete, 
{ 
  getGeocode, 
  getLatLng 
} from 'use-places-autocomplete';
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import './App.css';

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDUNVZ6BsAVqxq4DOjQnAW78hHtAr6rK70",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

function Map() {
  const center = useMemo(() => ({lat: 44, lng: -80}), []);
  const [ selected, setSelected ] = useState(null);
  return (
    <>
      <div className="places-container">
        <PlacesAutoComplete setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container">
          { selected && <Marker position={selected} /> }
      </GoogleMap>
    </>
  );
}

const PlacesAutoComplete = ({ setSelected }) => {
  const { 
    ready, 
    value, 
    suggestions: { status, data }, 
    setValue, 
    clearSuggestions 
  } = usePlacesAutocomplete();

  const handleSelection = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });

  };

  return <Combobox onSelect={handleSelection}>
    <ComboboxInput 
    value={value} 
    onChange={e => setValue(e.target.value)} 
    disabled={!ready} 
    className="combobox-input" 
    placeholder="Search an event"
    />
    <ComboboxPopover>
      <ComboboxList>
        { 
          status === "OK" && 
          data.map(({ place_id, description }) => <ComboboxOption 
             key={place_id} 
             value={description}
          /> 
          ) 
        }
      </ComboboxList>
    </ComboboxPopover>
  </Combobox>;
};
