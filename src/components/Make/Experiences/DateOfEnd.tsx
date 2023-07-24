import React, {useEffect, useState} from 'react';
//
import {ExperiencesContext, ExperiencesContextType} from '../../../assets/context/ExperiencesContext';

export default function DateOfEnd(props: {id: string; dateOfEnd: Date; current: boolean}) {
    const {handleExperience} = React.useContext(ExperiencesContext) as ExperiencesContextType;
    const [disable, setDisable] = useState(false);
    useEffect(() => {
        if (props.current) setDisable(true);
        else setDisable(false);
    });
    return (
        <>
            <p className='dateLabel'>To</p>
            <input
                className={`${props.id}`}
                type='date'
                placeholder='Date of End'
                value={props.dateOfEnd.toISOString().split('T')[0]}
                onChange={(e) => {
                    if (!e.target.valueAsDate) return;
                    handleExperience(props.id, e.target.valueAsDate, 'dateOfEnd');
                }}
                disabled={disable ? true : false}
            />
        </>
    );
}
