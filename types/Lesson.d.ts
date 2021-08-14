export default interface Lesson {
    name: string
    teacher?: string
    place?: string
    week?: 'all' | 'odd' | 'even'
    classes?: string
    color: string
}
