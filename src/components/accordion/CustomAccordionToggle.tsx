import React, {useContext} from 'react';
import { Button, AccordionContext, useAccordionToggle } from 'react-bootstrap';

type Props = {
  eventKey: string;
  callback?: (eventKey: string) => void;
}

const CustomAccordionToggle: React.FC<Props> = ({ eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext); // <-- Will update every time the eventKey changes.
  const toggleOnClick = useAccordionToggle(eventKey, () => {
    return callback && callback(eventKey);
  });
  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Button variant="warning" size="sm" className="mr-2" onClick={toggleOnClick}>
      {
        isCurrentEventKey ? 'Collapse' : 'Expand'
      }
    </Button>
  ); 
}

export default CustomAccordionToggle;