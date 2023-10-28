import React from 'react';
//
import {DiplomasContext, DiplomaContextType} from '../../../assets/context/DiplomaContext';

export default function School(props: {school: string; id: string}) {
    const {handleDiploma} = React.useContext(DiplomasContext) as DiplomaContextType;
    const [compact, setCompact] = React.useState(false);
    
    React.useEffect(() => {
        props.school === '' ? setCompact(false) : setCompact(true);
    }, []);
    
    return (
        <input
            type='text'
            name='school'
            id='school'
            value={props.school}
            onChange={(e) => handleDiploma(props.id, e.target.value, 'school')}
            onBlur={() => setCompact(true)}
            onClick={() => setCompact(false)}
            autoFocus={true}
            className={`${compact ? 'compact' : ''}`}
        />
    );
}
