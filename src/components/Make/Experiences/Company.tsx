import React from 'react';
//
import {ExperiencesContext, ExperiencesContextType} from '../../../assets/context/ExperiencesContext';

export default function Company(props: {company: string; id: string}) {
    const {handleExperience} = React.useContext(ExperiencesContext) as ExperiencesContextType;
    const [compact, setCompact] = React.useState(false);
    const handleCompany = (e: React.SyntheticEvent): void => {
        const target = e.target as HTMLInputElement;
        handleExperience(props.id, target.value, 'company');
    };
    React.useEffect(() => {
        props.company !== '' ? setCompact(true) : setCompact(false);
    }, []);
    return (
        <>
            <input
                id='company'
                name='company'
                type='text'
                placeholder='Company'
                value={props.company}
                onChange={(e) => handleCompany(e)}
                onBlur={(e) => {
                    if (e.target.value !== '') setCompact(true);
                    handleCompany(e);
                }}
                autoFocus={true}
                className={`company ${compact ? 'compact' : ''}`}
            />
        </>
    );
}
