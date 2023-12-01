// CSS
import "./global.css";
import styles from "./App.module.css";
// Components
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
      
        <main>
          <Post
            author="Vanessa Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eligendi consectetur esse  libero doloribus odit, rem fugiat quaerat vero sapiente! Iure, accusamus ullam nesciunt beatae vitae odio necessitatibus tenetur laboriosam."
          />

          <Post
            author="Marcos Vales"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eligendi consectetur esse  libero doloribus odit, rem fugiat quaerat vero sapiente! Iure, accusamus ullam nesciunt beatae vitae odio necessitatibus tenetur laboriosam."
          />
        </main>
      </div>
    </div>
  );
}
