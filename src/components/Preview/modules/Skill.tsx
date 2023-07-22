import {SkillInterface} from '../../../Types';

export default function Skill(props: {skills: Array<SkillInterface>}) {
    const list = props.skills.map((skill) => {
        return <SkillFactory key={skill.id} skill={skill} />;
    });
    return <div className='flex wrap'>{list}</div>;
}

function SkillFactory(props: {skill: SkillInterface}) {
    return <p>{props.skill.name}</p>;
}
