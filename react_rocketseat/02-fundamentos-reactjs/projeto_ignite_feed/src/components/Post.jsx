import styles from './Post.module.css'

export function Post(props){
  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <img src={imagePerfil} />
          <div className={styles.authorInfo}>
            <strong>Joana Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time>
          04 Jun 2021
        </time>
      </header>

    </article>
  )
}