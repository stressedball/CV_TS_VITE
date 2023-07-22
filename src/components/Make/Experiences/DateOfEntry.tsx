import React from 'react';
//
import {ExperiencesContext, ExperiencesContextType} from '../../../assets/context/ExperiencesContext';

export default function DateOfEntry(props: {
    id: string;
    dateOfEntry: Date;
}) {
    const {handleExperience} = React.useContext(ExperiencesContext) as ExperiencesContextType;
    // const [compact, setCompact] = React.useState(false);
    // React.useEffect(() => {
    //     props.dateOfEntry === '' ? setCompact(false) : setCompact(true);
    // }, []);
    return (
        <>
            <p className='dateLabel'>From</p>
            <input
                type='date'
                placeholder='Date of Entry'
                value={props.dateOfEntry.toISOString().split('T')[0]}
                onChange={(e) => {
                    if (e.target.valueAsDate) {
                        if (!e.target.valueAsDate) return;
                        handleExperience(props.id, e.target.valueAsDate, 'dateOfEntry');
                    }
                }}
            />
        </>
    );
}
