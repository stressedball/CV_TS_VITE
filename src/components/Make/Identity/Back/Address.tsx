import React from 'react';
//
import {IdentityContext} from '../../../../assets/context/IdentityContext';
import {IdentityContextType} from '../../../../assets/context/IdentityContext';

export default function Address() {
    const {identity, handleIdentity} = React.useContext(IdentityContext) as IdentityContextType;
    return (
        <>
            <div className='flex align block'>
                <p className='label address'>Address</p>
                <div className='flex align wrap block'>
                    <input // address number
                        value={identity.address.number}
                        onChange={(e: React.SyntheticEvent) => {
                            const target = e.target as HTMLInputElement;
                            identity.address.number = target.value;
                            handleIdentity(identity);
                        }}
                        onBlur={(e) => e.target.classList.add('compact')}
                        onClick={(e: React.SyntheticEvent) => {
                            const target = e.target as HTMLInputElement;
                            target.classList.remove('compact');
                        }}
                        className={`${identity.address.number !== '' ? 'compact' : ''}`}
                        type='number'
                        name='addressNumber'
                        id='addressNumber'
                    />
                    <input // address street
                        onChange={(e) => {
                            const target = e.target as HTMLInputElement;
                            identity.address.street = target.value;
                            handleIdentity(identity);
                        }}
                        onBlur={(e) => e.target.classList.add('compact')}
                        onClick={(e: React.SyntheticEvent) => {
                            const target = e.target as HTMLInputElement;
                            target.classList.remove('compact');
                        }}
                        className={`${identity.address.street !== '' ? 'compact' : ''}`}
                        type='text'
                        name='street'
                        id='street'
                        value={identity.address.street}
                    />
                    <input // address town
                        value={identity.address.town}
                        onChange={(e: React.SyntheticEvent) => {
                            const target = e.target as HTMLInputElement;
                            identity.address.town = target.value;
                            handleIdentity(identity);
                        }}
                        onBlur={(e) => e.target.classList.add('compact')}
                        onClick={(e: React.SyntheticEvent) => {
                            const target = e.target as HTMLInputElement;
                            target.classList.remove('compact');
                        }}
                        className={`${identity.address.town !== '' ? 'compact' : ''}`}
                        id='town'
                        type='text'
                        name='town'
                    />
                    <input // address zipCode
                        value={identity.address.zipCode}
                        onChange={(e) => {
                            const target = e.target as HTMLInputElement;
                            identity.address.zipCode = target.value;
                            handleIdentity(identity);
                        }}
                        onBlur={(e) => e.target.classList.add('compact')}
                        onClick={(e: React.SyntheticEvent) => {
                            const target = e.target as HTMLInputElement;
                            target.classList.remove('compact');
                        }}
                        className={`${identity.address.zipCode !== '' ? 'compact' : ''}`}
                        type='number'
                        name='zipCode'
                        id='zipCode'
                    />
                </div>
            </div>
        </>
    );
}
