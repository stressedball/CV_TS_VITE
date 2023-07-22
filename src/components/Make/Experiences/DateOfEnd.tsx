import React from 'react';
//
import {ExperiencesContext, ExperiencesContextType} from '../../../assets/context/ExperiencesContext';

export default function DateOfEnd(props: {
    id: string;
    dateOfEnd: Date;
    // compact: boolean;
}) {
    const {handleExperience} = React.useContext(ExperiencesContext) as ExperiencesContextType;

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
            />
        </>
    );
}

{
    /* {props.compact ? (
                <>
                    {props.isCurrent ? (
                        <p className='sticker current'>Current Position</p>
                    ) : (
                        <p className='sticker dateOfEnd'>{dateFormatter(dateOfEnd)}</p>
                    )}
                </>
            ) : (
                <div className='flex align gap'>
                    {props.isCurrent ? (
                        <input type='date' name='' id='' value={dateOfEnd.toISOString().split('T')[0]} disabled />
                    ) : (

                    )}
                </div>
            )} */
}
