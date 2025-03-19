import React from "react";
import styles from './UserCard.module.scss'

function UserCard({ handler, name, username, email }) {
    return (
        <>
            <div className={styles.user_card}>
                <h1>{name}</h1>
                <h3>Username: {username}</h3>
                <h3>Email: {email}</h3>
                <button className={styles.user_card__button} onClick={handler}>Change user info</button>
            </div>
        </>
    )
}

export default UserCard;