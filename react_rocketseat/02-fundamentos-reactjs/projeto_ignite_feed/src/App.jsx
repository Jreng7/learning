import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles  from './App.module.css'
import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      name: 'Diego Fernandes',
      role: 'CTO - @Rocketseat',
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 josue.design/doctorcare'},
    ],

    publishedAt: new Date('2024-12-18 20:05:07')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador - @Rocketseat',
    },

    content: [
      { type: 'paragraph', content: 'E ai pessoal, blz?? 👋'},
      { type: 'paragraph', content: 'Estou em projeto falando sobre CSS Grid se quiserem ver. É um projeto que fiz no NLW Ignite 2.5, evento da Rocketseat. O nome do projeto é CSS Grid 2.0 🚀'},
      { type: 'link', content: '👉 mayk.webdesigner/ignite2.5'},
    ],

    publishedAt: new Date('2024-11-07 13:22:08')
  },
];


export function App() {

  return (
    <>
      <Header />
  
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
        
      </div>
    </>
  
  )
}