import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Jreng7.png" className={styles.avatar}/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Josué R S Jacinto</strong>
              <time title="11 de Maio às 08:13h" dateTime='2021-03-12 08:52:01'>
                Cerca de 2h
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>
            Muito bom Joaquim, parabéns!! 🚀 
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