import React from 'react';
//
import {DiplomasContext, DiplomaContextType} from '../../../assets/context/DiplomaContext';

export default function DateOfObtention(props: {dateOfObtention: Date; id: string}) {
    const {handleDiploma} = React.useContext(DiplomasContext) as DiplomaContextType;

    return (
        <input
            type='date'
            name='diploma'
            id='diploma'
            value={props.dateOfObtention.toISOString().split('T')[0]}
            onChange={(e) => handleDiploma(props.id, e.target.valueAsDate, 'school')}
        />
    );
}
