"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <img href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fschool-clipart&psig=AOvVaw1qx6btHvjoLuOnaPlEdXZL&ust=1687159921397000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIj_ltCmzP8CFQAAAAAdAAAAABAE" />
      <h1>Dream School</h1>
      <h3>Find resources to get into your dream university:</h3>
      <button onClick={() => router.push("/edLevel")}>Start</button>
    </main>
  );
}
