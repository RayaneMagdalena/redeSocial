import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      {/* Header */}
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/RayaneMagdalena.png"
          />

          <div className={styles.authorInfo}>
            <strong>Rayane Magdalena</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="01 de dezembro às 17:55" dateTine="2023-12-01 17:55:30">
          Publicado há 1h
        </time>
      </header>

      {/* Content */}
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{" "}
          <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      {/* CommentForm */}
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
        <button type="submit">Publicar</button>
        </footer>
     
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
