import styles from '../styles/TableBody.module.scss'
import Schedule from '../types/Schedule'
import WeekDay from './WeekDay'

export default function TableBody({schedule, week}: {
    schedule: Schedule, week: number
}) {
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
                <span>下午</span>
                5～6
            </div>
            <div className={styles.cell}>
                <span>下午</span>
                7～8
            </div>
            <div className={styles.cell}>
                <span>晚上</span>
                9～10
            </div>
        </div>
        <WeekDay day={schedule.mon} week={week}/>
        <WeekDay day={schedule.tue} week={week}/>
        <WeekDay day={schedule.wed} week={week}/>
        <WeekDay day={schedule.thu} week={week}/>
        <WeekDay day={schedule.fri} week={week}/>
    </div>
}
