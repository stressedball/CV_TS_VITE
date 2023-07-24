import React from 'react';
//
import {ExperiencesContext, ExperiencesContextType} from '../../../assets/context/ExperiencesContext';

export default function Position(props: {title: string; id: string}) {
    const {handleExperience} = React.useContext(ExperiencesContext) as ExperiencesContextType;
    const [compact, setCompact] = React.useState(false);
    React.useEffect(() => {
        props.title !== '' ? setCompact(true) : setCompact(false);
    }, []);
    return (
        <>
            <input
                type='text'
                name='position'
                id='position'
                placeholder='Position'
                value={props.title}
                onChange={(e) => {
                    handleExperience(props.id, e.target.value, 'title');
                }}
                onBlur={(e) => {
                    if (e.target.value !== '') setCompact(true);
                }}
                className={`title ${compact ? 'compact' : ''}`}
                autoFocus={true}
            />
        </>
    );
}
