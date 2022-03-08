<template>
    <!-- Main Content -->
    <div id="content">
        <!-- It contain -->
        <TopBar></TopBar>
        <PageContent></PageContent>        
    </div>
    <!-- End of Main Content -->
</template>

<script>
import TopBar from "./TopBar.vue"
import PageContent from "./PageContent.vue"
export default {
    name: 'MainContent',
    components: {
        TopBar,
        PageContent
    }
}
</script>

<style>
</style>