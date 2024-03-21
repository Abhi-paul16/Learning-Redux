"use client"
import Image from "next/image";
import styles from "./page.module.css";
 
import { Provider } from 'react-redux'
import { store } from "@/store";
import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";
export default function Home() {
  return (
    <Provider store={store}>
    <main className={styles.main}>
    <h2>Redux toolkit Learning</h2>
    <AddTodo/>
    <Todos/>  
    </main>
    </Provider>
  );
}
