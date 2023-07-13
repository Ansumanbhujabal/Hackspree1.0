import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function OverlayHover(props) {
  const {tooltip, option, clickProp, btnColor} = props;
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {tooltip}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant={btnColor} size='sm' onClick={clickProp}>{option}</Button>
    </OverlayTrigger>
  );
}

export default OverlayHover;