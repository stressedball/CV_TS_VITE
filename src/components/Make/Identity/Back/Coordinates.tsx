import React from 'react';
//
import {IdentityContext} from '../../../../assets/context/IdentityContext';
import {IdentityContextType} from '../../../../assets/context/IdentityContext';

export default function Coordinates() {
    const {identity} = React.useContext(IdentityContext) as IdentityContextType;
    const {handleIdentity} = React.useContext(IdentityContext) as IdentityContextType;

    return (
        <>
            <div className='flex align block'>
                <p className='label'>Phone</p>
                <input
                    onBlur={(e) => e.target.classList.add('compact')}
                    onClick={(e: React.SyntheticEvent) => {
                        const target = e.target as HTMLInputElement
                        target.classList.remove('compact')
                    }}
                    className={`${identity.phone !== '' ? 'compact grow' : 'grow'}`}
                    type='number'
                    name='phone'
                    datatype='address'
                    id='phone'
                    value={identity.phone}
                    onChange={(e) => {
                        handleIdentity({
                            ...identity,
                            phone: e.target.value,
                        });
                    }}
                />
            </div>
            <div className='flex align block'>
                <p className='label'>Email</p>
                <input
                    onBlur={(e) => e.target.classList.add('compact')}
                    onClick={(e: React.SyntheticEvent) => {
                        const target = e.target as HTMLInputElement
                        target.classList.remove('compact')
                    }}
                    className={`${identity.email !== '' ? 'compact grow' : 'grow'}`}
                    type='email'
                    name='email'
                    datatype='address'
                    id='email'
                    value={identity.email}
                    onChange={(e) => {
                        handleIdentity({
                            ...identity,
                            email: e.target.value,
                        });
                    }}
                />
            </div>
            <div className='flex align block'>
                <p className='label'>Linkedin</p>
                <input
                    onBlur={(e) => e.target.classList.add('compact')}
                    onClick={(e: React.SyntheticEvent) => {
                        const target = e.target as HTMLInputElement
                        target.classList.remove('compact')
                    }}
                    className={`${identity.linkedin !== '' ? 'compact grow' : 'grow'}`}
                    type='email'
                    datatype='address'
                    name='linkedin'
                    id='linkedin'
                    value={identity.linkedin}
                    onChange={(e) => {
                        handleIdentity({
                            ...identity,
                            linkedin: e.target.value,
                        });
                    }}
                />
            </div>
            <div className='flex align block'>
                <p className='label'>GitHub</p>
                <input
                    onBlur={(e) => e.target.classList.add('compact')}
                    onClick={(e: React.SyntheticEvent) => {
                        const target = e.target as HTMLInputElement
                        target.classList.remove('compact')
                    }}
                    className={`${identity.gitHub !== '' ? 'compact grow' : 'grow'}`}
                    type='email'
                    name='gitHub'
                    id='gitHub'
                    datatype='address'
                    value={identity.gitHub}
                    onChange={(e) => {
                        handleIdentity({
                            ...identity,
                            gitHub: e.target.value,
                        });
                    }}
                />
            </div>
        </>
    );
}
