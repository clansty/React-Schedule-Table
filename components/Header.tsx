import styles from '../styles/Header.module.scss'

export default function Header({week}) {
    return <div className={styles.header}>
        第 {week} 周
    </div>
}
