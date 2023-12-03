// Bibliotecas
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
// Components
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
// CSS
import styles from "./Post.module.css";
// Hooks
import { useState } from 'react';


export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Adorei o post!!',
  ])
  const [newCommentText, setNewCommentText] = useState('')

  // Formatação da data
  const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true, 
  });
  // Enviar comentário
  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }
  // Comentário Inválido
  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  const isNewCommentEmpty = newCommentText.length === 0;
  // Deletar comentário
  function deleteComment (commentToDelete) {
    const commentWithouDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentWithouDeleteOne);
  }


  return (
    <article className={styles.post}>
      {/* Header */}
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
             <strong>{author.name}</strong>
             <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
           {publishedDateRelativeToNow}
        </time>
      </header>

      {/* Content */}
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>;
          }
        })}
      </div>

      {/* CommentForm */}
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
        name="commentInput"
        placeholder="Deixe um comentário"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
        />

        <footer>
           <button type="submit" disabled={isNewCommentEmpty}>
             Publicar
           </button>
        </footer>
      </form>

      {/* Comments */}
      <div className={styles.commentList}>
       {comments.map(comment => {
        return (
          <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}
          />
        )
       })}
      </div>
    </article>
  );
}
