<template>
  <div>
    <p>Type:
      <strong>{{type}}</strong>
    </p>
    <p>In View Duration:
      <strong>{{getDuration}}</strong>
    </p>
  </div>
</template>
<script>
  export default {
    name: 'text-event',
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
          if (this.events[i].type == 'text') {
            this.type = this.events[i].type;
            durationArr.push(this.events[i].in_view_duration);
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
