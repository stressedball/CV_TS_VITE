import {SkillInterface} from '../../../assets/Types';

export default function Skill(props: {skills: Array<SkillInterface>}) {
    const list = props.skills.map((skill) => {
        return <SkillFactory key={skill.id} skill={skill} />;
    });
    return <ul>{list}</ul>;
}

function SkillFactory(props: {skill: SkillInterface}) {
    return <li className='bubble'>{props.skill.name ? `${props.skill.name}.` : null}</li>;
}
