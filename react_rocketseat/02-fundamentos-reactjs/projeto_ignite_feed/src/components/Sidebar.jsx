import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img src="https://tm.ibxk.com.br/2023/07/26/26110031907090.jpeg?ims=1280x480" className={styles.cover}/>

      <div className={styles.profile}>

        <Avatar src="https://github.com/Jreng7.png"/>
        <strong>Josué R S Jacinto</strong>
        <span>Web Developer</span>
        
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}