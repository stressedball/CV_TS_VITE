import { DiplomaInterface } from '../../../assets/Types';
import dateFormatter from '../../../assets/Helpers';

export default function Diploma(props: {diplomas: Array<DiplomaInterface>}) {
    return props.diplomas.map((diploma) => {
        return (
            <div key={diploma.id} className=''>
                <p>
                    {diploma.title}
                    {diploma.school ? ` / ${diploma.school}` : null}
                </p>
                <p>{dateFormatter(diploma.dateOfObtention)}</p>
            </div>
        );
    });
}
