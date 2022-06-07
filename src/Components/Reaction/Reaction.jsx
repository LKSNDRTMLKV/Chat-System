import React from 'react';

//npm imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//component imports
import { Text14 } from '../Text/Text';

//component
const Reaction = ({ icon, text }) => {
    return (
        <div className="reaction-container">
            <FontAwesomeIcon icon={icon} />
            <Text14>{text}</Text14>
        </div>
    );
}

export default Reaction;