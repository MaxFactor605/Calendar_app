<template>
    <div class='calendarweek'>
        <CalendarDay v-for='day in sharedState.seedData'
            :key='day.id'
            :day='day'/> 
    </div>
</template>


<script>
import { store } from '../store.js'
import CalendarDay from '@/components/CalendarDay'

export default {
    name: 'CalendarWeek',
    data () {
        return {
            sharedState: store.state
        }
    },
    components: {
      CalendarDay: CalendarDay
    }
}
</script>


<style scoped>
.calendarweek{
    display:flex;
    margin: auto;
    width: 90%;
}
</style>