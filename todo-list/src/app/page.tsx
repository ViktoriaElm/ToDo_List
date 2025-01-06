'use client'
import styles from "@/app/page.module.css";
import ToDo from "@/app/todo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <ToDo/> */}
        {/* <form className={styles.input_box}>
          <input
          className={styles.input}
          // value={willDoList}
          // onChange={handleChange}
          placeholder="input your task" />
          <button
          className={styles.add_button}
          // onClick={() => {setWillDoList('something')}}
          >add</button>
        </form> */}
        <ToDo/>
      </main >
      <footer className={styles.footer}>
      </footer>
    </div >
  );
}
