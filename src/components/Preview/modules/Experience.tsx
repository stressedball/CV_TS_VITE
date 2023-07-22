import {ExperienceInterface} from '../../../Types';

export default function Experience(props: {experiences: Array<ExperienceInterface>}) {
    return props.experiences.map((experience) => {
        return (
            <div key={experience.id} className='flex align'>
                <p>
                    {experience.title}
                    {experience.company ? ` - ${experience.company}` : ''}
                </p>
                {experience.title && experience.company ? (
                    <>
                        <p>{experience.dateOfEntry.toDateString()}</p>
                        {experience.current === true ? (
                            'Present'
                        ) : (
                            <p>{experience.dateOfEnd.toDateString()}</p>
                        )}
                    </>
                ) : null}
            </div>
        );
    });
}
