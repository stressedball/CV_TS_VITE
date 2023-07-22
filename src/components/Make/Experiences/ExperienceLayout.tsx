// libraries
import React from 'react';
// style
import '../../../assets/css/make/experience/experience.css';
// scripts
import AddSvg from '../../../assets/svg/Add';
import Remove from '../../../assets/svg/Remove';
import Edit from '../../../assets/svg/Edit';
import {ExperiencesContext, ExperiencesContextType} from '../../../assets/context/ExperiencesContext';
import Position from './Position';
import Company from './Company';
import CurrentJob from './CurrentJob';
import DateOfEntry from './DateOfEntry';
import DateOfEnd from './DateOfEnd';

export default function ExperienceLayout() {
    const {experiences, addExperience, removeExperience} = React.useContext(
        ExperiencesContext
    ) as ExperiencesContextType;

    return (
        <>
            <div className='flex align justifyEnd'>
                <h2>Experiences</h2>
                <div onClick={() => addExperience()}>
                    <AddSvg />
                </div>
            </div>
            {experiences.map((experience) => {
                return (
                    <div key={experience.id} className='flex align experience wrap'>
                        <div className='flex align block'>
                            <Position title={experience.title} id={experience.id} />
                            <Company company={experience.company} id={experience.id} />
                        </div>

                        <div className='flex align block'>
                            <DateOfEntry id={experience.id} dateOfEntry={experience.dateOfEntry} />
                            <DateOfEnd id={experience.id} dateOfEnd={experience.dateOfEnd} />
                            <CurrentJob id={experience.id} current={experience.current} />
                        </div>

                        <div className='flex align options'>
                            <Edit />
                            <div className='flex align' onClick={() => removeExperience(experience.id)}>
                                <Remove />
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
