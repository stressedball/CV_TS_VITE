import React from 'react';
//
import {DiplomasContext, DiplomaContextType} from '../../../assets/context/DiplomaContext';
export default function Title(props: {title: string; id: string}) {
    const {handleDiploma} = React.useContext(DiplomasContext) as DiplomaContextType;
    const [compact, setCompact] = React.useState(false);
    React.useEffect(() => {
        props.title === '' ? setCompact(false) : setCompact(true);
    }, []);
    return (
        <input
            type='text'
            name='diploma'
            id='diploma'
            value={props.title}
            onChange={(e) => handleDiploma(props.id, e.target.value, 'title')}
            onBlur={() => setCompact(true)}
            onClick={() => setCompact(false)}
            autoFocus={true}
            className={`${compact ? 'compact' : ''}`}
        />
    );
}
