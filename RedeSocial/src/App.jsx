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
      avatarUrl: 'https://github.com/RayaneMagdalena.png',
      name: 'Rayane Magdalena',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera!!'},
      { type: 'paragraph', content: 'e agora o que vamos fazer?'},
      { type: 'link', content: 'umdoistres.vem/design'}
    ],
    publishedAt: new Date('2023-12-02 14:00:00'),
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/mykebrito.png',
      name: 'Caio Moraes',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'E ai pessoal!'},
      { type: 'paragraph', content: 'me diga então você'},
      { type: 'link', content: 'umdoistres.vem/design'}
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
