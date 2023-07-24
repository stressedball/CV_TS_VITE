import React from 'react';
//
import {SkillsContext, SkillsContextType} from '../../assets/context/SkillsContext';
import AddSvg from '../../assets/svg/Add';
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
    const [compact, setCompact] = React.useState(false);
    React.useEffect(() => {
        props.name !== '' ? setCompact(true) : setCompact(false);
    }, []);
    return (
        <div className='tile'>
            <input
                type='text'
                name='skill'
                id='skill'
                value={props.name}
                onChange={(e) => {
                    handleSkill(props.id, e.target.value);
                }}
                onBlur={() => setCompact(true)}
                onClick={() => setCompact(false)}
                autoFocus={true}
                className={compact ? 'compact' : ''}
            />

            <div className='flex align' onClick={() => removeSkill(props.id)}>
                <Remove />
            </div>
        </div>
    );
}
