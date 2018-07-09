<template>
  <div class="wrapper wrapper-content">
    <div class="row animated fadeInRight">
      <div class="ibox-title">
        <h2>Leads</h2>
      </div>
      <div class="ibox-content">
        <div>
          <div v-if="isRetrieving">
            loading . . .
          </div>
          <div v-else>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="clickable-row" v-for="(item, index) in leads" :key="index">
                  <td>{{item.contact.first_name}}</td>
                  <td>{{item.contact.last_name}}</td>
                  <td>{{item.contact.email_address}}</td>
                  <td>
                    <router-link :to="{ name: 'leads-view', params: { id: item.id } }" class="btn btn-default">View</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
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
        isRetrieving: false,
        leads: {},
        lead: {},
        isView: false,
      }
    },
    created() {
      this.retrieve();
    },

    methods: {
      retrieve() {
        this.isRetrieving = true;
        //get data from json
        this.$http.get("http://localhost:8080/static/leads_index.json").then((response) => {
          this.leads = response.data.data;
          this.isRetrieving = false;
        })
      },

      //when click, show the details of selected item
      viewItem(item) {
        // this.isView = true;
        // this.lead = item;
        this.$router.push({
          'name': 'leads-view',
          'params': {
            'leadId': item.id
          }
        });
        //console.log(this.groupedEvents);
        //console.log(this.lead);
      }
    }
  }

</script>

<style scoped>
  .clickable-row:hover {
    /*cursor: pointer !important;*/
    background: #f5f3f3 !important;
  }

</style>
