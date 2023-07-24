import {createContext, useState, useEffect} from 'react';
import {ChildrenType, HobbyInterface} from '../Types';
import uniqid from 'uniqid';
import {example1} from '../Example';

export type HobbyContextType = {
    hobbies: Array<HobbyInterface>;
    addHobby: Function;
    handleHobby: Function;
    removeHobby: Function;
};

export const HobbiesContext = createContext<HobbyContextType | null>(null);

function HobbiesProvider({children}: ChildrenType) {
    const EmptyHobby: HobbyInterface = {
        name: '',
        id: uniqid(),
    };
    const [hobbies, setHobbies] = useState(Array<HobbyInterface>);
    const addHobby = () => setHobbies([...hobbies, EmptyHobby]);
    const handleHobby = (id: string, value: string) => {
        setHobbies(hobbies.map((hobby) => {
            if (hobby.id === id) hobby.name = value;
            return hobby;
        }));
    };
    const removeHobby = (id: string) => setHobbies(hobbies.filter((hobby) => hobby.id !== id));
    useEffect(() => {
        setHobbies([...hobbies, EmptyHobby]);
        setHobbies([...hobbies, ...example1.hobbies]);
    }, []);
    return (
        <HobbiesContext.Provider value={{hobbies, addHobby, handleHobby, removeHobby}}>
            {children}
        </HobbiesContext.Provider>
    );
}
export default HobbiesProvider;
