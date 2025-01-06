import styles from "@/app/page.module.css";

export default function InputItems() {
    return(
      <div className={styles.input_box}>
          <input
          className={styles.input}
          // value={willDoList}
          // onChange={handleChange}
          placeholder="input your task" />
        </div>
    )
  }
