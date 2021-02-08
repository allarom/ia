import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home () {
  return (
    <div className={styles.container}>
      <main>
        <h1 style={{color: 'white'}}>Hello</h1>
      <iframe style={{width: '100vw', minHeight: '900px'}} src='https://starwarsintrocreator.kassellabs.io/#!/CMT0jK7vgKyQNnP63pFm'></iframe>
      </main>
      <Link href="/form"><a className={styles.button}>Proceed </a></Link>
    </div>
  )
}
