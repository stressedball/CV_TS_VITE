import { HobbyInterface } from "../../../assets/Types";

export default function Hobby(props: {hobbies: Array<HobbyInterface>}) {
    const list = props.hobbies.map(hobby => {
        return <HobbyFactory key={hobby.id} hobby={hobby}/>
    })
    return (
        <div className="flex column">
            {list}
        </div>
    )
}
function HobbyFactory(props: {hobby: HobbyInterface}) {
    return (
        <p>{props.hobby.name}</p>
    )
}