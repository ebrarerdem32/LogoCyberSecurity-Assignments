<template>
    <!-- Topbar -->
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <!-- Sidebar Toggle (Topbar) -->
        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
        </button>
        <SearchArea></SearchArea>
        <TopbarNavbar></TopbarNavbar>
       
    </nav>
    <!-- End of Topbar -->
</template>

<script>
import SearchArea from "./SearchArea.vue";
import TopbarNavbar from "./TopbarNavbar.vue"
export default {
    name: "TopBar",
    components: { 
        SearchArea,
        TopbarNavbar    
    }
}
</script>

<style>
</style>