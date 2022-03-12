<template>
  <v-col cols="6">
    <v-sheet tile height="54" class="d-flex">
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></v-select>
      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="450">
      <v-calendar
        ref="calendar"
        v-model="value"
        :type="type.toLowerCase()"
        :events="events"
        :event-overlap-threshold="30"
        color="primary"
        @change="getEvents"
        @click:date="addEvent"
        @click:day="addEvent"
        @click:time="addEvent"
        @click:interval="addEvent"
      ></v-calendar>
      <!-- @click:event="showEvent" -->
    </v-sheet>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Reminder/Event for <b>{{form.date}}</b></span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="form.event_name" label="Event Name" hint="You can Write the Future calls or about reminders you have here." persistent-hint required></v-text-field>
                </v-col>
                <v-col cols="12">
                <v-row
                  justify="space-around"
                  align="center"
                >
                <v-time-picker
                  scrollable
                  ampm-in-title
                  format="ampm"
                  v-model="form.time"
                ></v-time-picker>
                </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveEvent">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-col>
</template>
<script>
import defaultservice from "@services/auth/default";
const service = new defaultservice('events')
export default {
  methods: {
    async getEvents({ start, end }) {
      this.currentSelections.start = start
      this.currentSelections.end = end
      this.events = await service.getlist('?start='+start.date+'&end='+end.date).then(e=>e.data)
    },
    addEvent(event) {
      this.form.date = event.date
      this.form.event_name = ''
      this.dialog=true
    },
    async saveEvent(){
      let formData = new FormData()
      formData.append('title',this.form.event_name)
      formData.append('event_time',this.form.time)
      formData.append('event_date',this.form.date)
      let res = await service.create(formData)
      if(!res.status){
          let msg = ''
          for(let q in res.data){
            msg+=res.data[q]+'</br>';
          }
          this.$store.commit("setNotification", msg);
          //errors here
      }else{
          //suuccess here
          this.dialog = false
          this.form = {
            event_name:'',
            time:'',
            date:'',
          }
          this.$store.commit("setNotification", "Event Added");
          this.getEvents(this.currentSelections)
      }
    },
  },
  data() {
    return {
      type: "Day",
      types: ["Month", "Week", "Day"],
      events: [],
      value: "",
      form:{
        date: '',
        event_name: '',
        time: '',
      },
      currentSelections:{
        start: {},
        end: {},
      },
      dialog: false,
    };
  },
};
</script>