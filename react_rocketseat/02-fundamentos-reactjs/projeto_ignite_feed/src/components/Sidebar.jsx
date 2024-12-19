import styles from './Sidebar.module.css'
import retanguloVerde from '../assets/retanguloVerde.png'
import imagePerfil from '../assets/img-perfil.svg'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img src={retanguloVerde} className={styles.cover}/>

      <div className={styles.profile}>

        <img className={styles.avatar} src={imagePerfil} alt="imagem de perfil" />
        <strong>Joana Silva</strong>
        <span>Web Developer</span>
        
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}