<template>
  <aside class="side-right">
    <div class="mobile-nav">
      <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header row">
            <div class="col-xs-3">
              <a class="navbar-brand" href="#" style="padding: 8px">
                <img alt="Brand" src="../../public/img/logo-wzw.png" height="34px">
              </a>
            </div>
            <div class="col-xs-6" style="padding: 8px 0">
              <input type="text" class="form-control" placeholder="搜索"/>
            </div>
            <div class="col-xs-3">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#side-navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <img src="../../public/img/logo-wzw.png" alt="" width="32px">
    </div>

    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

  </aside>
</template>
<script>
    export default{
        data(){
            return{
            }
        },
    }
</script>
<style>
@media (min-width: 1024px) {
    .side-right {
      /*float: right;*/
      margin-left: 200px;
    }
  }

  .side-right {
    height: 100%;
  }

  .wiki-catalogue {
  }

  .wiki-catalogue li {
    margin-left: 20px;
  }




</style>

