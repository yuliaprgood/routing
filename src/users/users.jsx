import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addUserAction, getUsersAction} from "./../store/index.js";

export const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const [value, setValue] = useState('');

    const getUsers = () => {
        console.log(123);
        return function (dispatch) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                // .then(json => dispatch(getUsersAction(json)))
                .then(json => console.log(json))
        }
    }

    const addUser = () => {
        dispatch(addUserAction(value))
        setValue('');
    }

    return <div>
        <div>Users</div>
        <label>
            <input value={value} onChange={(e) => setValue(e.target.value) } />
        </label>
        {users.length > 0 ? users.map((user, i) => <div key={user + i}>{user}</div>) : <div>Users no found</div>}
        <button onClick={() => addUser()}>Add User</button>
        <button onClick={() => dispatch(getUsers())}>Get all users</button>
    </div>
}
