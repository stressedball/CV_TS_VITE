import React from 'react';
//
import {ExperiencesContext, ExperiencesContextType} from '../../../assets/context/ExperiencesContext';

export default function Position(props: {title: string; id: string}) {
    const {handleExperience} = React.useContext(ExperiencesContext) as ExperiencesContextType;
    const [compact, setCompact] = React.useState(false);
    React.useEffect(() => {
        props.title === '' ? setCompact(false) : setCompact(true);
    }, []);
    return (
        <>
            {!compact ? (
                <input
                    type='text'
                    name='position'
                    id='position'
                    value={props.title}
                    onChange={(e) => {
                        handleExperience(props.id, e.target.value, 'title');
                    }}
                    onBlur={() => setCompact(true)}
                    autoFocus={true}
                />
            ) : (
                <p className='compact title' onClick={() => setCompact(false)}>{props.title}</p>
            )}
        </>
    );
}
