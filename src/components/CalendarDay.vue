<template>
    <div class='calendarDay'>
        <h3 class='calendarDay__title'>{{ day.abbvTitle }}</h3>
        <div class='calendarDay__main' @click='setActiveDay(day.id)'>
            <CalendarEvent v-for='(event, index) in day.events'
                :key='index'
                :event='event'
                :day='day'/>
        </div>
    </div>
</template>

<script>
import CalendarEvent from '@/components/CalendarEvent'
import { store } from '@/store.js'

export default {
    name: 'CalendarDay',
    components:{
        CalendarEvent: CalendarEvent
    },
    props:['day'],
    methods:{
        setActiveDay(DayId) {
            store.setActiveDay(DayId)
        }
    }
}
</script>

<style scoped>
    .calendarDay{
        display: flex;
        flex-direction: column;
        width: 14%;
    }
    .calendarDay__title{
        background-color: #333;
        color: #fff;
        text-align: center;
        margin:0;
        padding: 15px 0;
        text-transform: uppercase;
        font-family: Andale Mono, monospace;
        font-size: 19px;
    }
    .calendarDay__main{
        background-color: #888;
        height: 100%;
        font-family: Andale Mono, monospace;
        font-size: 14px;
        transition: 1s;
    }
    .calendarDay:hover .calendarDay__main{
        background-color: #555;

    }
</style>