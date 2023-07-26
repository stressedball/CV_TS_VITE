import {ExperienceInterface} from '../../../assets/Types';
import dateFormatter from '../../../assets/Helpers';

export default function Experience(props: {experiences: Array<ExperienceInterface>}) {
    return props.experiences.map((experience) => {
        return (
            <div key={experience.id}>
                <p className='bold'>{experience.title}</p>
                &nbsp;
                {experience.company ? (
                    <>
                        <span>at</span>
                        &nbsp;
                        <p className='underline'>{experience.company}</p>
                        &nbsp;
                    </>
                ) : null}
                {/* <br></br> */}
                {experience.title && experience.company ? (
                    <>
                        <p style={{fontSize: '0.95rem'}}>&#40;{dateFormatter(experience.dateOfEntry)}</p>
                        &nbsp;
                        {experience.current === true ? (
                            <p style={{fontSize: '0.95rem'}}>Present&#41;</p>
                        ) : (
                            <p style={{fontSize: '0.95rem'}}>{dateFormatter(experience.dateOfEnd)}&#41;</p>
                        )}
                    </>
                ) : null}
            </div>
        );
    });
}
