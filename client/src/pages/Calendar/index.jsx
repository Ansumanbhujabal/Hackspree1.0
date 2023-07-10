import { Calendar, luxonLocalizer } from 'react-big-calendar';
import { DateTime, Settings } from 'luxon';

Settings.defaultZone = 'America/Chicago'; //sets default time to CDT; optional
const localizer = luxonLocalizer(DateTime, { firstDayOfWeek: 7 }) //defaults week start to Sunday instead of Monday

// const dt = 

const MyCalendar = (props) => (
    <div className="myCustomHeight">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  )