import styles from '../styles/TableHead.module.scss'

export default function TableHead(){
    return <div className={styles.container}>
        <div className={styles.space}/>
        <div className={styles.weekday}>
            <span>周一</span>
        </div>
        <div className={styles.weekday}>
            <span>周二</span>
        </div>
        <div className={styles.weekday}>
            <span>周三</span>
        </div>
        <div className={styles.weekday}>
            <span>周四</span>
        </div>
        <div className={styles.weekday}>
            <span>周五</span>
        </div>
    </div>
}
