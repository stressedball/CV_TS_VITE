import React from 'react';
//
import {DiplomasContext, DiplomaContextType} from '../../../assets/context/DiplomaContext';

export default function School(props: {school: string; id: string}) {
    const {handleDiploma} = React.useContext(DiplomasContext) as DiplomaContextType;

    return (
        <input
            type='text'
            name='school'
            id='school'
            value={props.school}
            onChange={(e) => handleDiploma(props.id, e.target.value, 'school')}
        />
    );
}

// export default function School(props: {diploma: DiplomaInterface; handleDiploma: Function; compact: boolean}) {
//     const [school, setSchool] = useState(props.diploma.school);
//     return (
//         <>
//             {props.compact ? (
//                 <p className='sticker school'>{school}</p>
//             ) : (
//                 <input
//                     placeholder='Name of Establishment'
//                     value={school}
//                     onChange={(e) => {
//                         props.handleDiploma(props.diploma.id, e.target.value, 'school');
//                         setSchool(e.target.value);
//                     }}
//                     className={`${props.diploma.id}`}
//                 />
//             )}
//         </>
//     );
// }
