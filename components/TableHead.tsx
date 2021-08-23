import styles from '../styles/TableHead.module.scss'
import formatDate from '../utils/formatDate'

const MS_IN_ONE_DAY = 1000 * 60 * 60 * 24

export default function TableHead({week, firstWeekStart}: { week: number, firstWeekStart: string }) {
    const thisWeekStart = new Date(new Date(firstWeekStart).getTime() + (week - 1) * MS_IN_ONE_DAY * 7)

    return <div className={styles.container}>
        <div className={styles.space}/>
        <div className={styles.weekday}>
            周一
            <span>{formatDate('M/d', new Date(thisWeekStart.getTime() + MS_IN_ONE_DAY))}</span>
        </div>
        <div className={styles.weekday}>
            周二
            <span>{formatDate('M/d', new Date(thisWeekStart.getTime() + MS_IN_ONE_DAY * 2))}</span>
        </div>
        <div className={styles.weekday}>
            周三
            <span>{formatDate('M/d', new Date(thisWeekStart.getTime() + MS_IN_ONE_DAY * 3))}</span>
        </div>
        <div className={styles.weekday}>
            周四
            <span>{formatDate('M/d', new Date(thisWeekStart.getTime() + MS_IN_ONE_DAY * 4))}</span>
        </div>
        <div className={styles.weekday}>
            周五
            <span>{formatDate('M/d', new Date(thisWeekStart.getTime() + MS_IN_ONE_DAY * 5))}</span>
        </div>
    </div>
}
