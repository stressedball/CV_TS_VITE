import React from 'react';
//
import {DiplomasContext, DiplomaContextType} from '../../../assets/context/DiplomaContext';

export default function DateOfObtention(props: {dateOfObtention: Date; id: string}) {
    const {handleDiploma} = React.useContext(DiplomasContext) as DiplomaContextType;

    return (
        <>
            <p className='dateLabel'>Graduation</p>
            <input
                type='date'
                name='diplomaDate'
                id='diplomaDate'
                value={props.dateOfObtention.toISOString().split('T')[0]}
                onChange={(e) => handleDiploma(props.id, e.target.valueAsDate, 'school')}
            />
        </>
    );
}
