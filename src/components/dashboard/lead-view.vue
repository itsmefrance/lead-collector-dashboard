<template>
  <div>
    <div class="ibox-title">
      <h2>Leads Details</h2>
    </div>
    <div class="ibox-content">
      <div v-if="state.isRetrieving">
        loading . . .
      </div>
      <div v-else>
        <p>First Name:
          <strong>{{leadsView.contact.first_name}}</strong>
        </p>
        <p>Last Name:
          <strong>{{leadsView.contact.last_name}}</strong>
        </p>
        <p>Email Address:
          <strong>{{leadsView.contact.email_address}}</strong>
        </p>
        <p>Browser:
          <strong>{{leadsView.metadata.browser}}</strong>
        </p>
        <p>Country:
          <strong>{{leadsView.metadata.country}}</strong>
        </p>
        <br>
        <p>Duration</p>
        <ul v-for="(event, index) in totalWatchDuration" :key="index">
          <li>
            <p>ID:
              <strong>{{event.identifier}}</strong>
            </p>
          </li>
          <li v-if="event.watchDuration">
            <p>Watch Duration:
              <strong>{{event.watchDuration}}</strong>
            </p>
          </li>
          <li v-else></li>
          <li v-if="event.inViewDuration">
            <p>In View Duration:
              <strong>{{event.inViewDuration}}</strong>
            </p>
          </li>
          <li v-else></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        leadsView: "",
        leadsEvent: "",
        eventType: "",
        eventIdentifier: "",
        eventDuration: "",
        state: {
          isRetrieving: false,
        }
      }
    },
    created() {
      this.retrieveData();
    },
    computed: {
      totalWatchDuration() {
        //get the duration property
        // var eventsArray = [];
        // for (var i = 0; i < this.leadsView.events.length; i++) {
        //     eventsArray.push(this.leadsView.events[i].watch_duration);
        // }

        // //group the eventsArray by id
        // var groupedData = _.groupBy(this.leadsView.events, function (data) {
        //   //console.log(data.identifier)
        //   return data.identifier;
        // });
        // console.log(groupedData);
        // return groupedData
        // Code
        const result = _(this.leadsView.events)
          .groupBy('identifier')
          .map((duration, id) => ({
            identifier: id,
            watchDuration: _.sumBy(duration, function (e) {
              return parseInt(e.watch_duration);
            }),
            inViewDuration: _.sumBy(duration, function (d) {
              return parseInt(d.in_view_duration);
            }),
            type: '',
          }))
          .value();

        return result;
      }
    },
    methods: {
      retrieveData() {
        var id = this.$route.params.id;
        this.state.isRetrieving = true;
        //get data from json
        this.$http.get("http://localhost:8080/static/leads_view_" + id + ".json").then((response) => {
          this.leadsView = response.data.data;
          this.leadsEvent = response.data.data.events;
          console.log(response.data.data);
          this.state.isRetrieving = false;
        })
      }
    }
  }

</script>
<style>
  strong {
    color: #000 !important;
  }

  ul {
    list-style: none;
    padding: 0;
  }

</style>
