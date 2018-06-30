<template>
  <div>
    <p>Type:
      <strong>{{type}}</strong>
    </p>
    <p>Watch Duration:
      <strong>{{getDuration}}</strong>
    </p>
  </div>
</template>
<script>
  export default {
    name: 'video-event',
    data(){
        return {
            type: "",
        }
    },
    props: ['events'],
    computed: {
      getDuration() {
        var durationArr = [];
        var durationConverted = [];
        var durationTotal, sum;
        //create an array of duration values. 
        for (var i = 0; i < this.events.length; i++) {
          if (this.events[i].type == 'video') {
            this.type = this.events[i].type;
            durationArr.push(this.events[i].watch_duration);
          }
        }
        //convert the array to numbers.
        durationConverted = durationArr.map(parseFloat);
        //get the total value of duration array
        durationTotal = durationConverted.reduce((a, b) => a + b, 0);
        // return sum
        return durationTotal;
      }
    }
  }

</script>
