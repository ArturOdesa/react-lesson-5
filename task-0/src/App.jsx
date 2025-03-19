import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import Comment from './components/Comment/Comment';
import Post from './components/Post/Post'

function App() {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((comments) => setComments(comments));
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <>
      <main className={styles.main}>
        <section className={styles.posts}>
          <h2 className={styles.title}>Posts</h2>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </section>
        <section className={styles.comments}>
          <h2 className={styles.title}>Comments</h2>
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
