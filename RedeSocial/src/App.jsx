// CSS
import "./global.css";
import styles from "./App.module.css";
// Components
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/MaiAlbuquerque.png',
      name: 'Maíra Albuquerque',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera!!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: ' Mai.developer/doctorcare'}
    ],
    publishedAt: new Date('2023-12-02 14:00:00'),
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/cmoraes5.png',
      name: 'Caio Moraes',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'E ai pessoal!'},
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 '},
      { type: 'link', content: ' devoncaio.design'}
    ],
    publishedAt: new Date('2023-12-01 22:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}                
                content={post.content}                
                publishedAt={post.publishedAt}                
              />
            )
          })}
       
        </main>
      </div>
    </div>
  );
}
