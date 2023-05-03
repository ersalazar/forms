//@ts-nocheck
import {useParams} from 'react-router-dom'
import { users } from '../resources/Users.ts'
import useForm from '../Hooks/useForm.ts'
import { NavLink } from 'react-router-dom';


function UserScreen() {

    
    const params = useParams()
    const user = users.find((user) => user.id == params.id)
 

    const [data, handleChange] = useForm<User>(user)    

    const {id, name, lastName, role, yearsOfExperience } = user

    
    return (
        <div className="container">
          <form>
            <div className="form-group">
              <label htmlFor="userId">ID:</label>
              <input
                type="number"
                className="form-control"
                id="userId"
                name="userId"
                value={id}
                onChange={handleChange}
              />
            </div>
      
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
      
            <div className="form-group">
              <label htmlFor="lastname">Lastname:</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={lastName}
                onChange={handleChange}
              />
            </div>
      
            <div className="form-group">
              <label htmlFor="role">Role:</label>
              <input
                type="text"
                className="form-control"
                id="role"
                name="role"
                value={role}
                onChange={handleChange}
              />
            </div>
      
            <div className="form-group">
              <label htmlFor="yoe">Years of experience:</label>
              <input
                type="number"
                className="form-control"
                id="yoe"
                name="yoe"
                value={yearsOfExperience}
                onChange={handleChange}
              />
            </div>
      
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
      
            <NavLink to="/" className="btn btn-secondary ml-2">
              return
            </NavLink>
          </form>
        </div>
      );
      
    
}

export default UserScreen