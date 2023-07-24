import {SkillInterface} from '../../../assets/Types';

export default function Skill(props: {skills: Array<SkillInterface>}) {
    const list = props.skills.map((skill) => {
        return <SkillFactory key={skill.id} skill={skill} />;
    });
    return <div className='flex column'>{list}</div>;
}

function SkillFactory(props: {skill: SkillInterface}) {
    return <p className='bubble'>{props.skill.name}</p>;
}
