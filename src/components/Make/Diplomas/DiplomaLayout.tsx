// libraries
import React from 'react';
// css
import '../../../assets/css/make/diploma.css';
// scripts
import {DiplomasContext, DiplomaContextType} from '../../../assets/context/DiplomaContext';
import Title from './Title';
import School from './School';
import DateOfObtention from './DateOfObtention';
import AddSvg from '../../../assets/svg/Add';
import Remove from '../../../assets/svg/Remove';

export default function DiplomaLayout() {
    const {diplomas, addDiploma, removeDiploma} = React.useContext(DiplomasContext) as DiplomaContextType;

    return (
        <>
            <div className='flex align justifyEnd'>
                <h2>Diplomas</h2>
                <div onClick={() => addDiploma()}>
                    <AddSvg />
                </div>
            </div>
            <div className='flex wrap'>
                {diplomas.map((diploma) => {
                    return (
                        <div key={diploma.id} className='diploma'>
                            <Title title={diploma.title} id={diploma.id} />
                            <School school={diploma.school} id={diploma.id} />
                            <DateOfObtention dateOfObtention={diploma.dateOfObtention} id={diploma.id} />
                            <div onClick={() => removeDiploma(diploma.id)}>
                                <Remove />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
