<template>
  <aside class="collapse side-left navbar-collapse text-center" id="side-navbar">
    <div class="row mobile-control" style="text-align: right;margin: 5px 5px;">
      <a href="#" data-toggle="collapse" data-target="#side-navbar">
        <span class="glyphicon glyphicon-align-justify"></span>
      </a>
    </div>
    <img src="../../public/img/logo-wzw.png" alt="" width="64" class="img-circle site-logo">
    <h3 class="site-name">
      Know
      <small class="no-padding">iki</small>
    </h3>
    <input type="text" class="form-control search-input" placeholder="搜索"/>
    <div class="wiki-catalogue">
      <ul class="list-unstyled" style="text-align: left">
        <li>
          <a href="#">
            Two
            <ul class="list-unstyled">
              <li>
                <a href="#">Sub
                  <ul class="list-unstyled">
                    <li><a href="#">33</a></li>
                    <li><a href="#">33</a></li>
                  </ul>
                </a></li>
              <li><a href="#">Sub</a></li>
              <li><a href="#">Sub</a></li>
            </ul>
          </a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
    </div>
  </aside>
</template>
<style>
  .side-left {
    background-color: #f9f9f9;
    width: 200px;
    border-right: #9e2e3e solid 2px;
    z-index: 100;
    position: fixed;
  }

  .navbar-collapse.collapse{
     height: 100% !important;
  }

</style>

<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
    }



</script>
