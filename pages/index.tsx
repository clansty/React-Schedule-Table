import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import TableHead from '../components/TableHead'
import TableBody from '../components/TableBody'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>

            <Header week={1}/>
            <TableHead/>
            <TableBody/>
        </div>
    )
}
