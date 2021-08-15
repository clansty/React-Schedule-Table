import styles from '../styles/TableHead.module.scss'

export default function TableHead() {
    //TODO 切换按钮

    return <div className={styles.container}>
        <div className={styles.space}/>
        <div className={styles.weekday}>
            周一
        </div>
        <div className={styles.weekday}>
            周二
        </div>
        <div className={styles.weekday}>
            周三
        </div>
        <div className={styles.weekday}>
            周四
        </div>
        <div className={styles.weekday}>
            周五
        </div>
    </div>
}
