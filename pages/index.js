import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invenire Studios</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Invenire Studios
        </h1>
        <div>Artist and Technologist</div>

      </main>

      <footer className={styles.footer}>
        <span>Neal Butler</span>
        <span>706.463.8523</span>
      </footer>
    </div>
  )
}
