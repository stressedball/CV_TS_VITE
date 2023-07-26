import {createContext, useState} from 'react';
import {IdentityInterface, ChildrenType} from '../Types';

export type IdentityContextType = {
    identity: IdentityInterface;
    handleIdentity: (identity: IdentityInterface) => void;
};

export const IdentityContext = createContext<IdentityContextType | null>(null);

function IdentityProvider({children}: ChildrenType) {
    const [identity, setPreviewIdentity] = useState<IdentityInterface>({
        firstName: 'John',
        lastName: 'Wick',
        email: 'jwick@gmail.com',
        address: {
            number: '15',
            street: 'Ocean Boulevard',
            zipCode: '976',
            town: 'Miami',
        },
        currentTitle: 'Chill dude',
        description: 'I just enjoy life :)',
        linkedin: 'j_wicks@linkedin.fr',
        phone: '5557925',
        gitHub: 'jwick@github.com',
    });

    const handleIdentity = (identity: IdentityInterface) => {
        setPreviewIdentity(identity);
    };

    return <IdentityContext.Provider value={{identity, handleIdentity}}>{children}</IdentityContext.Provider>;
}

export default IdentityProvider;
