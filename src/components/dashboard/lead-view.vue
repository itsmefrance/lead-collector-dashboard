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
        <video-event :events="leadsView.events"></video-event>
        <br>
        <text-event :events="leadsView.events"></text-event>
        <br>
        <router-link to="/">
          Back to list
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import videoEvent from '../event-type/video-event';
  import textEvent from '../event-type/text-event';

  export default {
    data() {
      return {
        leadsView: "",
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
        var id = this.$route.params.id;
        this.state.isRetrieving = true;
        //get data from json
        this.$http.get("http://localhost:8080/static/leads_view_" + id + ".json").then((response) => {
          this.leadsView = response.data.data;
          this.state.isRetrieving = false;
        });

      },
    },
    components: {
      'video-event': videoEvent,
      'text-event': textEvent,
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
