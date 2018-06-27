<template>
  <div id="app">
    <div id="wrapper">
      <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
          <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
              <div class="dropdown profile-element">
                <span>
                  <img alt="image" class="img-circle" src="./assets/logo.png" />
                </span>
                <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                  <span class="clear">
                    <!-- <span class="block m-t-xs">
                      <strong class="font-bold">Administrator</strong>
                    </span> -->
                    <!-- <span class="text-muted text-xs block">Art Director
                      <b class="caret"></b>
                    </span> -->
                  </span>
                </a>
                <!-- <ul class="dropdown-menu animated fadeInRight m-t-xs">
                  <li>
                    <a href="profile.html">Profile</a>
                  </li>
                  <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                  <li>
                    <a href="mailbox.html">Mailbox</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="login.html">Logout</a>
                  </li>
                </ul> -->
              </div>
              <div class="logo-element">
                IN+
              </div>
            </li>
            <li>
              <router-link to="/">
                <a href="#">
                  <!-- <i class="fa fa-th-large"></i> -->
                  <span class="nav-label">Leads Index</span>
                  <!-- <span class="fa arrow"></span> -->
                </a>
              </router-link>
              <router-link to="/">
                <a href="#">
                  <!-- <i class="fa fa-th-large"></i> -->
                  <span class="nav-label">Events Collective</span>
                  <!-- <span class="fa arrow"></span> -->
                </a>
              </router-link>

              <!-- <ul class="nav nav-second-level collapse">
                <li>
                  <a href="index.html">Dashboard v.1</a>
                </li>
                <li>
                  <a href="dashboard_2.html">Dashboard v.2</a>
                </li>
                <li>
                  <a href="dashboard_3.html">Dashboard v.3</a>
                </li>
                <li>
                  <a href="dashboard_4_1.html">Dashboard v.4</a>
                </li>
                <li>
                  <a href="dashboard_5.html">Dashboard v.5
                    <span class="label label-primary pull-right">NEW</span>
                  </a>
                </li>
              </ul> -->
            </li>
          </ul>
        </div>
      </nav>

      <div id="page-wrapper" class="gray-bg">
        <div class="row border-bottom">
          <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
              <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#">
                <i class="fa fa-bars"></i>
              </a>
            </div>
            <ul class="nav navbar-top-links navbar-right">
              <li>
                <a href="#">
                  <i class="fa fa-sign-out"></i> Log In
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- <div class="row wrapper border-bottom white-bg page-heading">
          <div class="col-lg-10">
            <h2>Leads</h2>
            <ol class="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="active">
                <strong>Leads Index</strong>
              </li>
            </ol>
          </div>
          <div class="col-lg-2">

          </div>
        </div> -->
        <div class="wrapper wrapper-content animated fadeInRight">
          <div class="row">
            <div class="col-lg-12">
              <div class="ibox float-e-margins">
                <router-view></router-view>
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
    name: 'App',
    data() {
      return {}
    },
  }

</script>
<style scope>
  span.nav-label {
    color: #fff;
  }

  img.img-circle {
    border-radius: 0 !important;
    width: 100%;
  }

</style>
