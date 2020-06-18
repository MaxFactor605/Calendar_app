<template>
    <div class='calendarentry'>
        <input type='text' v-model='EntryInput' class='calendarentry__input' placeholder='New Event'>
        <p class='calendarentry__text'>Day of event:<strong>{{ activeDayTitle }}</strong></p>
        <button class='calendarentry__but' @click='submitEvent(EntryInput)'>Submit</button>
        <p class='calendarentry__error' v-if='error'>Type event info</p>
    </div>
</template>


<script>
import { store } from '@/store.js'

export default {
    name: 'CalendarEntry',
    data(){
        return{
            EntryInput: '',
            error: false,
        }
    },
    computed:{
        activeDayTitle(){
            return store.getActiveDay().fullTitle
        }
    },
    methods:{
        submitEvent(EntryInput){
            if (EntryInput === '') return this.error = true
            store.submitEvent(EntryInput)
            this.EntryInput = '';
            this.error = false
        }
    }
}
</script>


<style scoped>
.calendarentry{
    width: fit-content;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #42b883;
    border-radius: 10%;
}
.calendarentry__input{
    border: none;
    border-bottom: 1px solid #aaa;
}
.calendarentry__text{
    color: #42b883;

}
.calendarentry__input:focus{
    outline: none;
}
.calendarentry__error{
    color: #ff0000;
    margin:0;
}
.calendarentry__but{
    color: #42b883;
    border: 1px solid #42b883;
    background: none; 
    border-radius: 2px;
}
.calendarentry__but:hover{
    color: #fff;
    background-color: #42b883;
}
</style>