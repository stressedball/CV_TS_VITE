import {IdentityInterface} from '../../../Types';
export default function Header(props: {identity: IdentityInterface}) {
    return (
        <header>
            <h3>
                {' '}
                {props.identity.firstName} <strong>{props.identity.lastName}</strong>
            </h3>
            <p>{props.identity.currentTitle}</p>
            <p>{props.identity.description}</p>
        </header>
    );
}
