<template>
  <div id="page-top">
    <!-- Page Wrapper -->
    
    <div id="wrapper">
      <!-- It contains main parts of web page -->
      <SidebarMenu> </SidebarMenu>
      <ContentHolder></ContentHolder> 
    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>

<script>

import SidebarMenu from "./components/SidebarMenu.vue"
import ContentHolder from "./components/ContentHolder.vue"
export default {
  name: 'App',
  components: {
    SidebarMenu, ContentHolder
  }
}
</script>
