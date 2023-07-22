import React from 'react';
//
import {HobbiesContext, HobbyContextType} from '../../assets/context/HobbiesContext';
import AddSvg from '../../assets/svg/Add';
import EditSvg from '../../assets/svg/Edit';
import Remove from '../../assets/svg/Remove';

export default function Hobbies() {
    const {hobbies, addHobby} = React.useContext(HobbiesContext) as HobbyContextType;
    return (
        <>
            <div className='flex align justifyEnd'>
                <h2>Hobbies</h2>
                <div onClick={() => addHobby()}>
                    <AddSvg />
                </div>
            </div>
            <div className='flex wrap'>
                {hobbies.map((hobby) => {
                    return <Hobby key={hobby.id} name={hobby.name} id={hobby.id} />;
                })}
            </div>
        </>
    );
}

function Hobby(props: {name: string; id: string}) {
    const {handleHobby, removeHobby} = React.useContext(HobbiesContext) as HobbyContextType;
    return (
        <div className='flex align'>
            <input
                type='text'
                name='hobby'
                id='hobby'
                value={props.name}
                onChange={(e) => handleHobby(props.id, e.target.value)}
            />
            <div className='flex align'>
                <div>
                    <EditSvg />
                </div>
                <div onClick={() => removeHobby(props.id)}>
                    <Remove />
                </div>
            </div>
        </div>
    );
}
