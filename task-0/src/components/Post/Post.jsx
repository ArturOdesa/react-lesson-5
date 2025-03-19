import React from "react";
import styles from './Post.module.scss'

export default function Post({ title, body }) {
    return (
        <article className={styles.posts__post}>
            <header className={styles.post__title}>
                <h3>{title}</h3>
            </header>
            <p className={styles.text}>{body}</p>
        </article>
    )
}