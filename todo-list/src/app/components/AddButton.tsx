import styles from "@/app/page.module.css";

function handleClick() {
    alert('You clicked me!');
  }

export default function AddButton() {
    return (
      <button
      className={styles.add_button}
      onClick={handleClick}
      >add</button>
    )
  }
