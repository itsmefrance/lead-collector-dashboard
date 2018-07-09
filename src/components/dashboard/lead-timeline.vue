<template>
  <div class="wrapper wrapper-content">
    <div class="row animated fadeInRight">
      <div class="col-lg-12">
        <div class="ibox float-e-margins">
          <div class="ibox-title">
            <h2>Lead Events Timeline</h2>
          </div>
          <div class="ibox-content" id="ibox-content">
            <div id="vertical-timeline" class="vertical-container dark-timeline center-orientation" v-for="(items, index) in sortedTimeline"
              :key="index">
              <div class="vertical-timeline-content">
                <div class="blockquote">
                  <p>ID:
                    <strong>{{items.id}}</strong>
                  </p>
                  <p>Type:
                    <strong>{{items.type}} </strong>
                  </p>
                  <p v-if="items.in_view_duration">View Duration:
                    <strong>{{items.in_view_duration}} </strong>
                  </p>
                  <p v-else-if="items.watch_duration">Watch Duration:
                    <strong>{{items.watch_duration}} </strong>
                  </p>
                  <p v-else></p>
                  <!-- <pre>
                {{leads}}
                </pre> -->
                  <span class="vertical-date">
                    <!-- make the date readable -->
                    <p>
                      <strong>{{ items.date | moment("'MMMM Do YYYY, h:mm:ss a'") }}</strong>
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        leads: "",
        state: {
          isRetrieving: false,
        },
      }
    },
    created() {
      this.retrieveData();
    },
    computed: {
      getTimeline() {
        //get all events and store in array
        var leadLength = this.leads.length;
        var leadEvents = [];

        for (var i = 0; i < leadLength; i++) {
          var items = this.leads[i].events.length;
          for (var n = 0; n < items; n++) {
            leadEvents.push(this.leads[i].events[n]);
          }
        }
        //console.log(leadEvents.length);
        return leadEvents;
      },
      //sort the timeline chronologically
      sortedTimeline() {
        return this.getTimeline.sort((a, b) => new Date(a.date) - new Date(b.date))
      }

    },
    methods: {
      retrieveData() {
        this.state.isRetrieving = true;
        //get data from json
        this.$http.get("http://localhost:8080/static/leads_index.json").then((response) => {
          this.leads = response.data.data;
          this.state.isRetrieving = false;
        });
      },
    },
  }

</script>
