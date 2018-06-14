<template>
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
      <tr v-for="item in leads.data" :key="item">
          <td>{{item.contact.first_name}}</td>
          <td>{{item.contact.last_name}}</td>
          <td>{{item.contact.email_address}}</td>
          <td><button class="btn btn-default">View</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    data() {
      return {
        leads: {},
      }
    },
    created() {
      this.$http.get("http://localhost:8080/static/leads_index.json").then((response) => {
        console.log(response.data.data);
        this.leads = response.data;
      })
    }
  }

</script>

<style scoped>


</style>
