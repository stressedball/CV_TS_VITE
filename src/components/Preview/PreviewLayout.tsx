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
import BulletPoint from '../../assets/svg/BulletPoint';

export default function PreviewLayout() {
    const {identity} = React.useContext(IdentityContext) as IdentityContextType;
    const {experiences} = React.useContext(ExperiencesContext) as ExperiencesContextType;
    const {diplomas} = React.useContext(DiplomasContext) as DiplomaContextType;
    const {skills} = React.useContext(SkillsContext) as SkillsContextType;
    const {hobbies} = React.useContext(HobbiesContext) as HobbyContextType;
    return (
        <div id='cv'>
            <Sidebar identity={identity} />

            <Header identity={identity} />

            <div id='cvContent'>
                <div className='cvBlock'>
                    <div className='flex align'>
                        <BulletPoint />
                        <p className='legend right'>Experiences</p>
                    </div>
                    <Experience experiences={experiences} />
                </div>

                <div className='cvBlock'>
                    <div className='flex align'>
                        <BulletPoint />
                        <p className='legend right'>Diplomas</p>
                    </div>
                    <Diploma diplomas={diplomas} />
                </div>

                <div className='cvBlock'>
                    <div className='flex align'>
                        <BulletPoint />
                        <p className='legend right'>Skills</p>
                    </div>
                    <Skill skills={skills} />
                </div>

                <div className='cvBlock'>
                    <div className='flex align'>
                        <BulletPoint />
                        <p className='legend right'>Hobbies</p>
                    </div>
                    <Hobby hobbies={hobbies} />
                </div>
            </div>
        </div>
    );
}
