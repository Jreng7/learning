import styles from './Post.module.css'

export function Post(props){
  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <img src="https://github.com/Jreng7.png" className={styles.avatar}/>
          <div className={styles.authorInfo}>
            <strong>Josué R S Jacinto</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime='2021-03-12 08:52:01'>
          publicado há 1h
        </time>
      </header>

      <div className={styles.postContent}>
       <p>Fala galeraa 👋</p>
       <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
       <p>👉 {' ' } <a href="">josue.design/doctorcare</a></p>
       <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe seu comentário'/>

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

    </article>
  )
}