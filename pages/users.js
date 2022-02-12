import {useState} from "react";
import Link from "next/link";


const Users = () => {

    const [users, setUsers] = useState([
            {id: 1, name: 'petya'},
            {id: 2, name: 'vasya'},
        ]
    )

    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user =>
                    <li key={{}}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                            {/*<A href=`/users/${user.id` text={user.name}/>*/}

                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Users;