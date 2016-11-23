<template>
  <div class="container-fluid no-padding" id="app">
    <sidebar></sidebar>
    <contentWrapper></contentWrapper>
  </div>
</template>
<script>
    import Sidebar from './components/Sidebar.vue'
    import ContentWrapper from './components/ContentWrapper.vue'
    export default{
        data(){
            return{
            }
        },
        components:{
            Sidebar,
            ContentWrapper,
        }
    }

</script>
<style lang="stylus">
  html, body {
    height: 100%;
    width: 100%;
  }

  aside {
    height: 100% !important;
  }

  #app {
    height: 100%;
    width: 100%;
  }

  .full {
    height: 100%;
    width: 100%;
  }

  .no-padding {
    padding: 0 !important;
  }

  .site-logo {
    margin: 30px 0 10px 0;
  }

  .site-name {
    margin: 10px 0 30px 0;
  }

  .search-input {
    margin: 10px 0 30px 0;
  }

  .mobile-nav {

  }

  @media (min-width: 1024px) {
    .mobile-control {
      display: none;
    }

    .mobile-nav {
      display: none;
    }
  }

  .wiki-article {
    margin: 30px 50px;
  }

  .wiki-title {
    font-weight: 700;
    text-align: center;
    margin: 50px;
  }

  .wiki-article-catalogue {
    background-color: #f9f9f9;
    border: dashed #5e5e5e 1px;
    width: 200px;
    margin: 50px;
  }

  .wiki-article-catalogue li {
    margin-left: 20px;
  }

  .wiki-content {
    margin: 10px;
  }

  .wiki-content * {
    font-size: medium;
  }

  .wiki-content * {
    text-indent: 34px;
    margin-bottom: 10px;
  }
</style>
