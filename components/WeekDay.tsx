import styles from '../styles/TableBody.module.scss'
import WeekDayType from '../types/WeekDay'
import LessonType from '../types/Lesson'

export default function WeekDay({day, week}: { day: WeekDayType, week: number }) {
    return <div className={styles.weekDay}>
        <Lesson lessons={day.l1} week={week}/>
        <Lesson lessons={day.l2} week={week}/>
        <Lesson lessons={day.l3} week={week}/>
        <Lesson lessons={day.l4} week={week}/>
    </div>
}

function selectLesson({lessons, week}: { lessons?: Array<LessonType>, week: number }) {
    if (!lessons) return
    for (const l of lessons) {
        if (l.exclude?.includes(week))
            continue
        if (l.include?.includes(week))
            return l
        if (l.weeks === 'all')
            return l
        if (l.weeks === 'odd' && week % 2 === 1)
            return l
        if (l.weeks === 'even' && week % 2 === 0)
            return l
    }
}

function Lesson(param: { lessons?: Array<LessonType>, week: number }) {
    const lesson = selectLesson(param)
    return <div className={styles.lessonContainer}>
        {lesson &&
        <div className={styles.lesson} style={{backgroundColor: lesson.color}}>
            <span>{lesson.name}</span>
            <span>{lesson.teacher}</span>
            <span>{lesson.place}</span>
        </div>}
    </div>
}
