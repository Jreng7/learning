import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'



export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ])


  const [newCommentText, setNewCommentText] = useState('')


  const publishedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  

  function handleCreateNewComment(e){
    e.preventDefault()
    
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(){
    setNewCommentText(event.target.value)
  }


 // Acima ficam definidas as funções, regras de negócio e variáveis de estado do componente.
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDate} dateTime={publishedAt.toISOString()}>
          {publishedDateRelative}
        </time>
      </header>

      <div className={styles.postContent}>
        {content.map((linha) => {
          if(linha.type === 'paragraph'){
            return <p key={linha.content}>{linha.content}</p>
          } else if (linha.type === 'link'){
            return <p key={linha.content}><a href="#">{linha.content}</a></p>
          }
        })}
      </div>  

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe seu comentário' 
          value={newCommentText}
          name="valorDigitado"
          onChange={handleNewCommentChange}
          />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment}/>
        })}
      </div>
    </article>
  )
}