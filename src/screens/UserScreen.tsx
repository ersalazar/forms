//@ts-nocheck
import {useParams} from 'react-router-dom'
import { users } from '../resources/Users.ts'
function UserScreen() {

    const {id} = useParams()
    const user = users.find((user) => user.id == id)
 
    return(
        <div className="container">
            <h2>Welcome {user.name}</h2>
        </div>
    )
    
}

export default UserScreen