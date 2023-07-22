import {createContext, useState, useEffect} from 'react';
import {SkillInterface, ChildrenType} from '../Types';
import uniqid from 'uniqid';
import {example1} from '../Example';

export type SkillsContextType = {
    skills: Array<SkillInterface>;
    addSkill: Function;
    handleSkill: Function;
    removeSkill: Function;
};

export const SkillsContext = createContext<SkillsContextType | null>(null);

function SkillsProvider({children}: ChildrenType) {
    const EmptySkill: SkillInterface = {
        name: '',
        id: uniqid(),
    };
    const [skills, setSkills] = useState(Array<SkillInterface>);
    const addSkill = () => setSkills([...skills, EmptySkill]);
    const handleSkill = (id: string, value: string) => {
        skills.map((skill) => {
            if (skill.id === id) skill.name = value;
            return skill;
        });
    };
    const removeSkill = (id: string) => setSkills(skills.filter((skill) => skill.id !== id));
    useEffect(() => {
        setSkills([...skills, EmptySkill]);
        setSkills([...skills, ...example1.skills]);
    }, []);
    return (
        <SkillsContext.Provider value={{skills, addSkill, handleSkill, removeSkill}}>{children}</SkillsContext.Provider>
    );
}
export default SkillsProvider;