<template>
  <div class="row animated fadeInRight">
    <div class="col-lg-12">
      <div class="ibox float-e-margins">
        <div class="ibox-title">
          <h2>Lead Events Timeline</h2>
        </div>
        <div class="ibox-content" id="ibox-content">
           
          <div id="vertical-timeline" class="vertical-container dark-timeline center-orientation" v-for="(item,index) in getTimeline" :key="index">
            <div class="vertical-timeline-content">
               <h2>Type: {{type}}</h2>
              <p>Duration: {{duration}}
              </p>
              <a href="#" class="btn btn-sm btn-primary"> More info</a>
              <span class="vertical-date">
                Today
                <br/>
                <small>{{getTimeline[index]}}</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'text-timeline',
    data() {
      return {
        type: "",
        events: [],
        date: "",
        duration: [],
      }
    },
    props: ['timeline'],
    computed: {
      //   getDuration() {
      //     var durationArr = [];
      //     var durationConverted = [];
      //     var durationTotal;
      //     //create an array of duration values. 
      //     for (var i = 0; i < this.events.length; i++) {
      //       if (this.timeline[i].type == 'text') {
      //         this.type = this.timeline[i].type;
      //         durationArr.push(this.timeline[i].in_view_duration);
      //       }
      //     }
      //     //convert the array to numbers.
      //     durationConverted = durationArr.map(parseFloat);
      //     //get the total value of duration array
      //     durationTotal = durationConverted.reduce((a, b) => a + b, 0);
      //     // return sum
      //     return durationTotal;
      //   }

      getTimeline() {
        var tempEventsArr = [];
        //trying to get the arrays of text event
        for (var i = 0; i < this.timeline.length; i++) {
          for (var j = 0; j < this.timeline.length; j++) {
            if (this.timeline[i].events[j].type == 'text') { //<-- not sure if this really get the correct array of date based on the condition.
              tempEventsArr.push(this.timeline[i].events[j].date);
              this.type = this.timeline[i].events[j].type;
              this.duration = this.timeline[i].events[j].in_view_duration; //<--- this thing is not working properly. will fix later
            }
          }
        }
        console.log(this.timeline);
        return tempEventsArr;
        //console.log(tempEventsArr);
      },
    }
  }

</script>
