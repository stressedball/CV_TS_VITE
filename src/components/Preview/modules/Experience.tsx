import {ExperienceInterface} from '../../../assets/Types';
import dateFormatter from '../../../assets/Helpers';

export default function Experience(props: {experiences: Array<ExperienceInterface>}) {
    return props.experiences.map((experience) => {
        return (
            <div key={experience.id} className=''>
                <p>
                    {experience.title}
                    {experience.company ? ` / ${experience.company}` : ''}
                </p>
                {experience.title && experience.company ? (
                    <>
                        <p style={{display: 'inline-block'}}>{dateFormatter(experience.dateOfEntry)}</p>
                        {experience.current === true ? (
                            <p style={{display: 'inline-block'}}>Present</p>
                        ) : (
                            <p style={{display: 'inline-block'}}>{dateFormatter(experience.dateOfEnd)}</p>
                        )}
                    </>
                ) : null}
            </div>
        );
    });
}
