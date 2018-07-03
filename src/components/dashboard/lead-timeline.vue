<template>
  <div class="wrapper wrapper-content">
    <text-timeline :timeline="leadsEvent"></text-timeline>
  </div>
</template>
<script>
  import videoTimeline from '../event-timeline/video-timeline';
  import textTimeline from '../event-timeline/text-timeline';
  export default {
    data() {
      return {
        leadsEvent: "",
        state: {
          isRetrieving: false,
        },
      }
    },
    created() {
      this.retrieveData();
    },
    methods: {
      retrieveData() {
        this.state.isRetrieving = true;
        //get data from json
        this.$http.get("http://localhost:8080/static/leads_index.json").then((response) => {
          this.leadsEvent = response.data.data;
          this.state.isRetrieving = false;
        });
      },
    },
    components:{
      'text-timeline': textTimeline,
      'video-timeline': videoTimeline,
    }
  }

</script>
