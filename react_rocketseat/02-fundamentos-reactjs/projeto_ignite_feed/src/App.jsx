import { Header } from './components/Header'
import styles  from './App.module.css'
import './global.css'
import { Post } from './Post'
import { Sidebar } from './components/Sidebar'


export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post name="Visa card - Post 1" feed="Aqui é uma função componente que está recebendo esse texto como 
          dentro do atributo feed. Logo."/>
          <Post name="Mastercard - Posto 2" feed="Aqui é uma função componente que está recebendo esse texto como 
          dentro do atributo feed. Logo."/>
        </main>
        
      </div>
    </>
  
  )
}