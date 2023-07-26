import {createContext, useState, useEffect} from 'react';
import {ExperienceInterface, ChildrenType} from '../Types';
import uniqid from 'uniqid';
import {example1} from '../Example';

export type ExperiencesContextType = {
    experiences: Array<ExperienceInterface>;
    addExperience: () => void;
    handleExperience: (id: string, value: string | Date, key: string) => void;
    setCurrentJob: (id: string, value: boolean) => void;
    removeExperience: (id: string) => void;
};

export const ExperiencesContext = createContext<ExperiencesContextType | null>(null);

function ExperiencesProvider({children}: ChildrenType) {
    const emptyExperience: ExperienceInterface = {
        title: '',
        company: '',
        dateOfEntry: new Date(),
        dateOfEnd: new Date(),
        id: uniqid(),
        current: false,
    };
    const [experiences, setExperiences] = useState(Array<ExperienceInterface>);
    const addExperience = () => {
        setExperiences([...experiences, emptyExperience]);
    };
    function handleExperience(id: string, value: string | Date, key: string) {
        setExperiences(
            experiences.map((experience) => {
                if (experience.id === id) {
                    if (typeof value === 'string') {
                        key === 'title' ? (experience.title = value) : (experience.company = value);
                    } else {
                        key === 'dateOfEntry' ? (experience.dateOfEntry = value) : (experience.dateOfEnd = value);
                    }
                }
                return experience;
            })
        );
    }
    const setCurrentJob = (id: string, value: boolean) => {
        setExperiences(
            experiences.map((exp) => {
                if (exp.id === id) {
                    exp.current = value;
                }
                return exp;
            })
        );
    };
    const removeExperience = (id: string) => {
        setExperiences(experiences.filter((ex) => ex.id !== id));
    };
    useEffect(() => {
        setExperiences([...experiences, emptyExperience]);
        setExperiences([...experiences, example1.experience]);
    }, []);
    return (
        <ExperiencesContext.Provider
            value={{experiences, addExperience, handleExperience, setCurrentJob, removeExperience}}
        >
            {children}
        </ExperiencesContext.Provider>
    );
}

export default ExperiencesProvider;
