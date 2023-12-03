import { ThumbsUp } from "@phosphor-icons/react/dist/ssr";
import styles from "./Comment.module.css";
import { Trash } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import { useState } from "react";


export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/RayaneMagdalena.png" />

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>
              <strong>Rayane Magdalena</strong>
              <time title="01 de dezembro às 17:55" dateTine="2023-12-01 17:55:30">
                Publicado há 1h
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>

        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}


