import React from 'react';
//
import {IdentityContext} from '../../../../assets/context/IdentityContext';
import {IdentityContextType} from '../../../../assets/context/IdentityContext';

export default function Front() {
    const {identity} = React.useContext(IdentityContext) as IdentityContextType;
    const {handleIdentity} = React.useContext(IdentityContext) as IdentityContextType;
    return (
        <>
            <div className='visitCard grid'>
                <input
                    value={identity.firstName}
                    onChange={(e) => {
                        handleIdentity({
                            ...identity,
                            firstName: e.target.value,
                        });
                    }}
                    onBlur={(e) => e.target.classList.add('compact')}
                    onClick={(e: React.SyntheticEvent) => {
                        const target = e.target as HTMLInputElement;
                        target.classList.remove('compact');
                    }}
                    className={`identity ${identity.firstName !== '' ? 'compact' : ''}`}
                    type='text'
                    name='firstName'
                    id='firstName'
                />
                <input
                    value={identity.lastName}
                    onChange={(e) => {
                        handleIdentity({
                            ...identity,
                            lastName: e.target.value,
                        });
                    }}
                    onBlur={(e) => e.target.classList.add('compact')}
                    onClick={(e: React.SyntheticEvent) => {
                        const target = e.target as HTMLInputElement;
                        target.classList.remove('compact');
                    }}
                    className={`identity ${identity.lastName !== '' ? 'compact' : ''}`}
                    type='text'
                    name='lastName'
                    id='lastName'
                />
                <input
                    onChange={(e) => {
                        handleIdentity({
                            ...identity,
                            currentTitle: e.target.value,
                        });
                    }}
                    onBlur={(e) => e.target.classList.add('compact')}
                    onClick={(e: React.SyntheticEvent) => {
                        const target = e.target as HTMLInputElement;
                        target.classList.remove('compact');
                    }}
                    className={`identity ${identity.currentTitle !== '' ? 'compact' : ''}`}
                    type='text'
                    name='currentTitle'
                    id='currentTitle'
                    value={identity.currentTitle}
                />
                <input
                    value={identity.description}
                    onChange={(e) => {
                        handleIdentity({
                            ...identity,
                            description: e.target.value,
                        });
                    }}
                    onBlur={(e) => e.target.classList.add('compact')}
                    onClick={(e: React.SyntheticEvent) => {
                        const target = e.target as HTMLInputElement;
                        target.classList.remove('compact');
                    }}
                    className={`identity ${identity.description !== '' ? 'compact' : ''}`}
                    type='text'
                    name='description'
                    id='description'
                />
            </div>
        </>
    );
}
