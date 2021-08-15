import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import TableHead from '../components/TableHead'
import TableBody from '../components/TableBody'
import {InferGetStaticPropsType} from 'next'
import fs from 'fs'
import YAML from 'yaml'
import Config from '../types/Config'
import {useState} from 'react'
import inferCurrentWeek from '../utils/inferCurrentWeek'

function Home({config}: InferGetStaticPropsType<typeof getStaticProps>) {
    const currentWeek = inferCurrentWeek(config.firstWeekStart)
    const [week, setWeek] = useState(currentWeek)
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>

            <Header week={week}/>
            <TableHead/>
            <TableBody schedule={config.schedule} week={week}/>
        </div>
    )
}

export const getStaticProps = () => {
    return new Promise<{
        props: { config: Config }
    }>(resolve =>
        fs.readFile('config.yaml', 'utf-8',
            (_, text) => {
                const config = YAML.parse(text) as Config
                resolve({
                    props: {
                        config,
                    },
                })
            }))
}

export default Home
