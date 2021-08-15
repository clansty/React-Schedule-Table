export default interface Lesson {
    name: string
    teacher?: string
    place?: string
    weeks?: 'all' | 'odd' | 'even'
    classes?: string
    color: string
    include?: Array<number>
    exclude?: Array<number>
}
