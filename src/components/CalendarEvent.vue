<template>
    <div class='calendarEvent' :style='getEventBgColor'>
        <div v-if='!event.edit'>
            <p class='calendarEvent__detail'>{{ event.details }}</p>
            <div class='calendarEvent__icons'>
                <i class="fa fa-pencil-square edit-icon"
                    @click='editEvent(day.id, event.details)'></i>
                <i class="fa fa-trash-o delete-icon"
                    @click='deleteEvent(day.id, event.details)'></i>
            </div>
        </div>
        <div v-if='event.edit'>
            <input class='calendarEvent__input' type='text'  placeholder='New event' v-model='newInput'>
            <i class='fa fa-check' @click='UpdateEvent(day.id, event.details, newInput)'></i>
        </div>
    </div>
</template>

<script>
import { store } from '@/store.js'
export default {
    name: 'Calendar Event',
    props: ['event', 'day'],
    data() {
        return {
            newInput: '',
        }
    },
    computed: {
        getEventBgColor(){
            const colors = ['#7BFF7F', '#FFC37B','#F1F352','#EF52F3','#F3528D','#52E7F3','#FC0505','#70D0EE']
            let randColor = colors[Math.floor(Math.random() * colors.length)]
            return `background-color: ${randColor}`
        }
    },
    methods:{
        UpdateEvent(dayId, eventDetails, newEventDetails){
            if (newEventDetails === '') newEventDetails = eventDetails
            store.updateEvent(dayId, eventDetails, newEventDetails)
        },
        deleteEvent(dayId, eventDetails){
            store.deleteEvent(dayId, eventDetails)
            this.newInput = ''
        },
        editEvent(dayId, eventDetails){
            store.editEvent(dayId,eventDetails)
        }

    }
}
</script>


<style scoped>
.calendarEvent{
    width: 90%;
    margin: 10px auto;
    text-align: center;
    padding: 5px

}
.fa{
    margin: 5px;
    cursor: pointer;
}
.calendarEvent__detail{
    margin:0;
}
.calendarEvent__input{
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid #ccc;

}
.calendarEvent__input:focus{
    outline: none;
}
</style>