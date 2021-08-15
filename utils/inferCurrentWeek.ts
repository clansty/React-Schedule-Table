export default function inferCurrentWeek(firstWeekStart: string) {
    const now = new Date()
    const firstWeek = new Date(firstWeekStart)
    const offset = now.getTime() - firstWeek.getTime()
    return Math.floor(offset / 1000 / 60 / 60 / 24 / 7) + 1
}
