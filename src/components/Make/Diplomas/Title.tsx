import React from 'react';
//
import {DiplomasContext, DiplomaContextType} from '../../../assets/context/DiplomaContext';
export default function Title(props: {title: string; id: string}) {
    const {handleDiploma} = React.useContext(DiplomasContext) as DiplomaContextType;

    return (
        <input
            type='text'
            name='diploma'
            id='diploma'
            value={props.title}
            onChange={(e) => handleDiploma(props.id, e.target.value, 'title')}
        />
    );
}
