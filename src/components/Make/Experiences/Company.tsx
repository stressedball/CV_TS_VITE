import React from 'react';
//
import {ExperiencesContext, ExperiencesContextType} from '../../../assets/context/ExperiencesContext';

export default function Company(props: {company: string; id: string}) {
    const {handleExperience} = React.useContext(ExperiencesContext) as ExperiencesContextType;

    const handleCompany = (e: any) => {
        handleExperience(props.id, e.target.value, 'company');
    };
    const [compact, setCompact] = React.useState(false);
    React.useEffect(() => {
        props.company === '' ? setCompact(false) : setCompact(true);
    }, []);
    return (
        <>
            {!compact ? (
                <input
                    type='text'
                    placeholder='Company'
                    value={props.company}
                    onChange={(e) => handleCompany(e)}
                    onBlur={(e) => {
                        handleCompany(e)
                        setCompact(true)
                    }}
                    autoFocus={true}
                />
            ) : (
                <p className='compact company' onClick={() => setCompact(false)}>
                    {props.company}
                </p>
            )}
        </>
    );
}
