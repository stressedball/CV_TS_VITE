import React from 'react';
//
import {DiplomasContext, DiplomaContextType} from '../../../assets/context/DiplomaContext';

export default function DateOfObtention(props: {dateOfObtention: Date; id: string}) {
    const {handleDiploma} = React.useContext(DiplomasContext) as DiplomaContextType;
    const [hide, setHide] = React.useState('');
    React.useEffect(() => {
        if (window.innerWidth <= 280) {
            setHide('hide');
        } else setHide('');

        const setVisibility = () => {
            if (window.innerWidth <= 280) {
                setHide('hide');
            } else setHide('');
        };
        window.addEventListener('resize', setVisibility);
        return () => window.removeEventListener('resize', setVisibility);
    }, []);
    return (
        <>
            {hide === '' ? <p className='dateLabel'>Graduated</p> : <GraduationSVG />}
            <input
                type='date'
                name='diplomaDate'
                id='diplomaDate'
                value={props.dateOfObtention.toISOString().split('T')[0]}
                onChange={(e) => {
                    if (!e.target.valueAsDate) return;
                    handleDiploma(props.id, e.target.valueAsDate, 'dateOfObtention');
                }}
            />
        </>
    );
}

function GraduationSVG() {
    return (
        <svg className='graduate' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.5 11.5285L11.9999 13.574L7.49997 11.5285V14.5056L12 16.4341L16.5 14.5056V11.5285ZM18 10.8466L22.0623 9.00011L11.9999 4.42627L2.99988 8.51718V15.7501L4.49988 15.7501V10.1649L5.99997 10.8467V15.4947L12 18.0661L18 15.4947V10.8466ZM5.56233 9.00011L11.9999 6.07396L18.4374 9.00011L11.9999 11.9263L5.56233 9.00011ZM2.99997 18.0001V16.5001H4.49997V18.0001H2.99997Z'
            />
        </svg>
    );
}
