import React from "react";
import styles from './Comment.module.scss'

function Comment({ name, email, body }) {
    
    return (
        <article className={styles.comments__comment}>
            <header className={styles.comment__header}>
                <h4>{name}</h4>
                <address>{email}</address>
            </header>
            <p className={styles.comment__text}>{body}</p>
        </article>
    )
}

export default Comment;

