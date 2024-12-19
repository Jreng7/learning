import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import { Comment } from './components/Comment'


import styles  from './App.module.css'
import './global.css'


export function App() {

  return (
    <>
      <Header />
  
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post />
          <Post />
        </main>
        
      </div>

      <Comment />
    </>
  
  )
}