import { IdentityInterface } from "../../../assets/Types";

export default function Sidebar(props: {identity: IdentityInterface}) {
    return (
        <div id='sidebar'>
            <p>{props.identity.email}</p>
            <p>{props.identity.phone}</p>
            <p>{props.identity.linkedin}</p>
            <p>{props.identity.gitHub}</p>
            <p>
                {props.identity.address.number}
                {props.identity.address.number && props.identity.address.street
                    ? ` - ${props.identity.address.street}`
                    : null}
            </p>
            <p>
                {props.identity.address.town}
                {props.identity.address.town && props.identity.address.zipCode
                    ? ` - ${props.identity.address.zipCode}`
                    : null}
            </p>
        </div>
    );
}
