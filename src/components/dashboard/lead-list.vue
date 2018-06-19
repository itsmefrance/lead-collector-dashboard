<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="viewItem(item)" class="clickable-row" v-for="(item, index) in leads" :key="index">
          <td class="clickable-row">{{item.contact.first_name}}</td>
          <td>{{item.contact.last_name}}</td>
          <td>{{item.contact.email_address}}</td>
        </tr>
      </tbody>
    </table>
    <div class="well">
      <div v-if="isView">
        Last Name:
        <h4>{{lead.contact.first_name}}</h4>
        First Name:
        <h4>{{lead.contact.last_name}}</h4>
        Browser:
        <h4>{{lead.metadata.browser}}</h4>
        Country:
        <h4>{{lead.metadata.country}}</h4>
        Total Watch Duration:
        <h4>{{totalWatchDuration}}</h4>
        <!-- <h4>{{lead.events[0].type}}</h4>
        <h4>{{lead.events[0].watch_duration}}</h4> -->
      </div>
      <div v-else>
        {{lead}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        leads: {},
        lead: {},
        isView: false,
      }
    },
    created() {
      //get data from json
      this.$http.get("http://localhost:8080/static/leads_index.json").then((response) => {
        console.log(response.data.data);
        this.leads = response.data.data;
      })
    },
    computed: {
      totalWatchDuration() {
        //an array that will compile the watch duration 
        var durationArr = [];
        for (var i = 0; i < this.lead.events.length; i++) {
          //check if the element is not null, if so add.
          if (this.lead.events[i].watch_duration != null) {
            //add each watch duration
            durationArr.push(this.lead.events[i].watch_duration);
          }
        }
        var durationSum = durationArr.reduce((a, b) => a + b);
        //generate the sum
        return durationSum;
      }
    },
    methods: {
      //when click, show the details of selected item
      viewItem(item) {
        this.isView = true;
        this.lead = item;
        //console.log(this.lead);
      }
    }
  }

</script>

<style scoped>
  .clickable-row:hover {
    cursor: pointer !important;
    background: #ccc !important;
  }

</style>
