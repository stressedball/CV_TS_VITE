import {DiplomaInterface} from '../../../assets/Types';
import dateFormatter from '../../../assets/Helpers';

export default function Diploma(props: {diplomas: Array<DiplomaInterface>}) {
    return props.diplomas.map((diploma) => {
        return (
            <div key={diploma.id}>
                <p className='bold'>{diploma.title}</p>
                &nbsp;
                {diploma.school ? (
                    <>
                        <span>at</span>
                        &nbsp;
                        <p className='underline'>{diploma.school}</p>
                    </>
                ) : null}
                &nbsp;
                {diploma.school && diploma.title ? <p style={{fontSize:"0.95rem"}}>({dateFormatter(diploma.dateOfObtention)})</p> : null}
            </div>
        );
    });
}
