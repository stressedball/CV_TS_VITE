import React from 'react';
//
import {SkillsContext, SkillsContextType} from '../../assets/context/SkillsContext';
import AddSvg from '../../assets/svg/Add';
import EditSvg from '../../assets/svg/Edit';
import Remove from '../../assets/svg/Remove';

export default function Skills() {
    const {skills, addSkill} = React.useContext(SkillsContext) as SkillsContextType;
    return (
        <>
            <div className='flex align justifyEnd'>
                <h2>Skills</h2>
                <div onClick={() => addSkill()}>
                    <AddSvg />
                </div>
            </div>
            <div className='flex wrap'>
                {skills.map((skill) => {
                    return <Skill key={skill.id} name={skill.name} id={skill.id} />;
                })}
            </div>
        </>
    );
}

function Skill(props: {name: string; id: string}) {
    const {handleSkill, removeSkill} = React.useContext(SkillsContext) as SkillsContextType;
    return (
        <div className='flex align'>
            <input
                type='text'
                name='skill'
                id='skill'
                value={props.name}
                onChange={(e) => handleSkill(props.id, e.target.value)}
            />
            <div className='flex align'>
                <div>
                    <EditSvg />
                </div>
                <div onClick={() => removeSkill(props.id)}>
                    <Remove />
                </div>
            </div>
        </div>
    );
}
