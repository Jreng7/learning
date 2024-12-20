import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


export function Comment({ content, funcaoDeletarComentario }) {

  function handleDeleteComment(){
    funcaoDeletarComentario(content)
  }


  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false}  src="https://avatars.githubusercontent.com/u/2254731?v=4"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Nome</strong>
              <time >hora</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}