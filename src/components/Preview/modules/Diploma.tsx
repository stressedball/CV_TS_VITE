import {DiplomaInterface} from '../../../Types';

export default function Diploma(props: {diplomas: Array<DiplomaInterface>}) {
    return props.diplomas.map((diploma) => {
        return (
            <div key={diploma.id} className='flex align'>
                <p>
                    {diploma.title}
                    {diploma.school ? ` - ${diploma.school}` : null}
                </p>
                <p>{diploma.dateOfObtention.toDateString()}</p>
            </div>
        );
    });
}
