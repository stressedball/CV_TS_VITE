import {IdentityInterface} from '../../../assets/Types';

export default function Header(props: {identity: IdentityInterface}) {
    return (
        <div className='headerContainer'>
            <header className='cvHero'>
                <p className='legend name'>{props.identity.firstName}</p>
                <p className='legend name'>{props.identity.lastName}</p>
                <p className='legend title'>{props.identity.currentTitle}</p>
            </header>
        </div>
    );
}
