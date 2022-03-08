<template>
 <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <SidebarBrand></SidebarBrand>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <DashboardPlace></DashboardPlace>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Interface
            </div>

            <ComponentsMenu></ComponentsMenu>
          
             <!-- Nav Item - Utilities Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Utilities:</h6>
                        <a class="collapse-item" href="utilities-color.html">Colors</a>
                        <a class="collapse-item" href="utilities-border.html">Borders</a>
                        <a class="collapse-item" href="utilities-animation.html">Animations</a>
                        <a class="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">
            

            <!-- Heading -->
            <div class="sidebar-heading">
                Addons
            </div>
            <PagesMenu></PagesMenu>
            
            <ChartMenu></ChartMenu>

            <TablesMenu></TablesMenu>

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
        <!-- End of Sidebar -->
 
</template>

<!-- import vue components to SidebarMenu -->
<script>
import ChartMenu from "./ChartMenu.vue"
import ComponentsMenu from "./ComponentsMenu.vue"
import DashboardPlace from "./DashboardPlace.vue"
import PagesMenu from "./PageMenu.vue"
import SidebarBrand from "./SidebarBrand.vue"
import TablesMenu from "./TablesMenu.vue"

export default {
  name: 'SidebarMenu',
  components: { SidebarBrand, DashboardPlace, ChartMenu,

                ComponentsMenu, PagesMenu, TablesMenu,
  }  
}
</script>

