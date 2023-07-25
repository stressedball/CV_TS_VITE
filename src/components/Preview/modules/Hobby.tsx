import { HobbyInterface } from "../../../assets/Types";

export default function Hobby(props: {hobbies: Array<HobbyInterface>}) {
    const list = props.hobbies.map(hobby => {
        return <HobbyFactory key={hobby.id} hobby={hobby}/>
    })
    return (
        <ul>
            {list}
        </ul>
    )
}
function HobbyFactory(props: {hobby: HobbyInterface}) {
    return (
        <li>{props.hobby.name}.</li>
    )
}