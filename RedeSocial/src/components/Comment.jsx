import { ThumbsUp } from "@phosphor-icons/react/dist/ssr";
import styles from "./Comment.module.css";
import { Trash } from "@phosphor-icons/react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/RayaneMagdalena.png" />

      <div className={styles.commentBox}>
       
        <div className={styles.commentContent}>
         
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rayane Magdalena</strong>
              <time title="01 de dezembro às 17:55" dateTine="2023-12-01 17:55:30">
                Publicado há 1h
              </time>
            </div>

            <button title="Deletar comentário">
                <Trash size={20} />
            </button>
          </header>

          <p>Muito bom, parbéns!!</p>
     
        </div>

        <footer>
            <button>
                <ThumbsUp size={24} />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}