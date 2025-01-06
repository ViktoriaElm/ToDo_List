import { useState } from "react";
import styles from "@/app/page.module.css";
import RemoveButton from "./components/RemoveButton";
import EditButton from "./components/EditButton";
import AddButton from "./components/AddButton";
import InputItems from "./components/InputItems";

interface Item {
  id: number;
  item: string;
  isDone: boolean;
}

export default function ToDo() {

  const [inProgressList, setInProgressList] = useState([
    { id: 1, item: 'Task to do todo', isDone: false }
  ]);

  const [willDoList, setWillDoList] = useState([
    { id: 1, item: 'Find a job', isDone: false }
  ]);

  const [doneList, setDoneList] = useState([
    { id: 1, item: 'Leave ARTW', isDone: true }
  ]);

  function CheckboxItem() {
    return (
      <input className={styles.checkbox} type="checkbox" />
    )
  }

  function ListItem({ item }: { item: Item }) {
    const listItemClass = item.isDone ? styles.done : styles.notDone;

    return (
      <li
        key={item.id}
        className={`${styles.list_item} ${listItemClass}`}
      >
        <CheckboxItem />
        <span className={styles.item_text}>{item.item}</span>
        <EditButton />
        <RemoveButton />
      </li>
    )
  }

  function ItemList({ items }: { items: Item[] }) {
    return (
      <ul>
        {items.map((item: Item) =>
          <ListItem key={item.id} item={item} />
        )}
      </ul>
    )
  }

  const listItemsInProgress = <ItemList items={inProgressList} />;
  const listWillDo = <ItemList items={willDoList} />;
  const listDone = <ItemList items={doneList} />;

  return (
    <>
      <div className={styles.input_box}>
        <InputItems />
        <AddButton />
      </div>
      <div className={styles.item_box}>
        <div className={styles.today_tasks}>
          <h2 className={styles.h2}>In progress</h2>
          {listItemsInProgress}
        </div>
        <div className={styles.other_tasks}>
          <h2 className={styles.h2}>Will do</h2>
          {listWillDo}
        </div>
        <div className={styles.done}>
          <h2 className={styles.h2}>Done</h2>
          {listDone}
        </div>
      </div>
    </>
  )
}
