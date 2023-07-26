import React from 'react';
//
import {ExperiencesContext, ExperiencesContextType} from '../../../assets/context/ExperiencesContext';

export default function CurrentJob(props: {id: string; current: boolean}) {
    const {setCurrentJob} = React.useContext(ExperiencesContext) as ExperiencesContextType;
    return (
        <>
            <input
                value='Current'
                type='button'
                onClick={() => {
                    setCurrentJob(props.id, !props.current);
                }}
                className={props.current ? 'lock' : ''}
                onMouseEnter={(e: React.SyntheticEvent) => {
                    const target = e.target as HTMLInputElement;
                    target.classList.add('hover');
                }}
                onMouseLeave={(e: React.SyntheticEvent) => {
                    const target = e.target as HTMLInputElement;
                    target.classList.remove('hover');
                }}
            />
        </>
    );
}
