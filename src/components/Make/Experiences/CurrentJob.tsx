import React from 'react';
//
import {ExperiencesContext, ExperiencesContextType} from '../../../assets/context/ExperiencesContext';

export default function CurrentJob(props: {id: string; current: boolean}) {
    const {setCurrentJob} = React.useContext(ExperiencesContext) as ExperiencesContextType;
    return (
        <div className='flex align'>
            <p className='dateLabel'>Current</p>
            <input
                value={`${props.current}`}
                checked={props.current}
                type='checkbox'
                onChange={(e) => {
                    setCurrentJob(props.id, e.target.checked);
                }}
            />
            {/* {props.compact ? (
                <p className='sticker current'></p>
            ) : (
                <div className='flex align'>
                    <label>Current</label>

                </div>
            )} */}
        </div>
    );
}
