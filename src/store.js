import { seedData } from './seed.js'

export const store = {
    state: {
        seedData
    },
    getActiveDay(){
        return this.state.seedData.find((day) => day.active)
    },
    setActiveDay(DayId){
        this.state.seedData.map((day) => {
            day.id === DayId ? day.active=true : day.active=false
        })
    },
    submitEvent(EntryInput){
        const activeDay = this.getActiveDay()
        activeDay.events.push({
            details: EntryInput,
            edit: false,
        })
    },
    deleteEvent(dayId, eventDetail){
        const day = this.getDayObj(dayId)
        const eventId = day.events.findIndex((event) => event.details === eventDetail)
        day.events.splice(eventId, 1)
    },
    updateEvent(dayId, eventDetail, newEventDetail){
        const event = this.getEventObj(dayId, eventDetail)
        event.details = newEventDetail
        this.resetEditEvents()
    },
    editEvent(dayId, eventDetail){
        this.resetEditEvents()
        const event = this.getEventObj(dayId, eventDetail)
        event.edit = true
    },
    resetEditEvents(){
        this.state.seedData.map(day => {
            day.events.map(event => event.edit = false)
        })
    },
    getEventObj(dayId, eventDetail){
        const day = this.getDayObj(dayId)
        const event = day.events.find(event => event.details === eventDetail)
        return event
    },
    getDayObj(dayId){
        const day = this.state.seedData.find(day => day.id === dayId)
        return day
    }
}