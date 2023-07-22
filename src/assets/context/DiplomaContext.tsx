import {createContext, useState, useEffect} from 'react';
import {ChildrenType, DiplomaInterface} from '../Types';
import uniqid from 'uniqid';
import {example1} from '../Example';

export type DiplomaContextType = {
    diplomas: Array<DiplomaInterface>;
    addDiploma: Function;
    handleDiploma: Function;
    removeDiploma: Function;
};

export const DiplomasContext = createContext<DiplomaContextType | null>(null);

function DiplomasProvider({children}: ChildrenType) {
    const EmptyDiploma: DiplomaInterface = {
        title: '',
        school: '',
        dateOfObtention: new Date(),
        id: uniqid(),
    };
    const [diplomas, setDiplomas] = useState(Array<DiplomaInterface>);
    const addDiploma = () => setDiplomas([...diplomas, EmptyDiploma]);
    const handleDiploma = (id: string, value: string | Date, key: string) => {
        setDiplomas(
            diplomas.map((diploma) => {
                if (diploma.id === id) {
                    if (typeof value === 'string') {
                        key === 'title' ? (diploma.title = value) : (diploma.school = value);
                    } else {
                        diploma.dateOfObtention = value;
                    }
                }
                return diploma;
            })
        );
    };
    const removeDiploma = (id: string) => setDiplomas(diplomas.filter((d) => d.id !== id));
    useEffect(() => {
        setDiplomas([...diplomas, EmptyDiploma]);
        setDiplomas([...diplomas, example1.diploma]);
    }, []);
    return (
        <DiplomasContext.Provider
            value={{ diplomas, addDiploma, handleDiploma, removeDiploma }}>
            {children}
        </DiplomasContext.Provider>
    );
}

export default DiplomasProvider;
