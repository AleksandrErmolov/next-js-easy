import {useEffect, useState} from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";


const Users = ({users}) => {


    return (

        <MainContainer keywords={'users next js'}>
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
        </MainContainer>
    );
};

export default Users;


export async function getStaticProps(context) {

    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await resp.json()

    return {
        props: {users}, // will be passed to the page component as props
    }
}