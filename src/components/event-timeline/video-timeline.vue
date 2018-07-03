<template>
  <div class="row animated fadeInRight">
    <div class="col-lg-12">
      <div class="ibox float-e-margins">
        <div class="ibox-title">
          <h2>Lead Events Timeline</h2>
        </div>
        <div class="ibox-content" id="ibox-content">
          <div id="vertical-timeline" class="vertical-container dark-timeline center-orientation">
            <div class="vertical-timeline-content">
              <h2>Meeting</h2>
              <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and
                products. Below please find the current status of the sale.
              </p>
              <a href="#" class="btn btn-sm btn-primary"> More info</a>
              <span class="vertical-date">
                Today
                <br/>
                <small>Dec 24</small>
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
    name: 'video-timeline',
    data() {
      return {
        type: "",
        date: "",
      }
    },
    props: ['events'],
    computed: {
      getDuration() {
        var durationArr = [];
        var durationConverted = [];
        var durationTotal;
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
