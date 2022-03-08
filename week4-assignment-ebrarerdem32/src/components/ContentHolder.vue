<template>
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
        <MainContent></MainContent>
        <FooterHolder></FooterHolder>
    </div>
    <!-- End of Content Wrapper -->
</template>

<script>
import MainContent from "./MainContent.vue"
import FooterHolder from "./FooterHolder.vue"
export default {
    name: 'ContentHolder',
    components: {
             MainContent,
             FooterHolder
    }
}
</script>

<style>
.flex-column {
    flex-direction: column !important;
}
.d-flex {
    display: flex !important;
}
</style>