import styles from '../styles/Header.module.scss'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'

export default function Header({week, setWeek, totalWeeks}) {
    return <div className={styles.header}>
        <LeftOutlined onClick={() => week > 1 && setWeek(week - 1)}/>
        第 {week} 周
        <RightOutlined onClick={() => week < totalWeeks && setWeek(week + 1)}/>
    </div>
}
