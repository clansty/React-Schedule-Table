import styles from '../styles/TableBody.module.scss'

export default function TableBody() {
    return <div className={styles.container}>
        <div className={styles.colHeaders}>
            <div className={styles.cell}>
                <span>上午</span>
                1～2
            </div>
            <div className={styles.cell}>
                <span>上午</span>
                3～4
            </div>
            <div className={styles.cell}>
                <span>上午</span>
                5～6
            </div>
            <div className={styles.cell}>
                <span>上午</span>
                7～8
            </div>
        </div>
    </div>
}
