// libraries
import React from 'react';
// css
import '../../assets/css/preview/cv.css';
// scripts
import {IdentityContext, IdentityContextType} from '../../assets/context/IdentityContext';
import {ExperiencesContext, ExperiencesContextType} from '../../assets/context/ExperiencesContext';
import {DiplomasContext, DiplomaContextType} from '../../assets/context/DiplomaContext';
import {SkillsContext, SkillsContextType} from '../../assets/context/SkillsContext';
import {HobbiesContext, HobbyContextType} from '../../assets/context/HobbiesContext';
import Sidebar from './modules/Sidebar';
import Header from './modules/Header';
import Experience from './modules/Experience';
import Diploma from './modules/Diploma';
import Skill from './modules/Skill';
import Hobby from './modules/Hobby';

export default function PreviewLayout() {
    const {identity} = React.useContext(IdentityContext) as IdentityContextType;
    const {experiences} = React.useContext(ExperiencesContext) as ExperiencesContextType;
    const {diplomas} = React.useContext(DiplomasContext) as DiplomaContextType;
    const {skills} = React.useContext(SkillsContext) as SkillsContextType;
    const {hobbies} = React.useContext(HobbiesContext) as HobbyContextType;
    return (
        <div className='flex' id='cv'>
            <Sidebar identity={identity} />

            <div>
                <Header identity={identity} />

                <h3>Experiences</h3>
                <Experience experiences={experiences} />

                <h3>Diplomas</h3>
                <Diploma diplomas={diplomas} />

                <h3>Skills</h3>
                <Skill skills={skills} />

                <h3>Hobbies</h3>
                <Hobby hobbies={hobbies} />
            </div>
        </div>
    );
}
