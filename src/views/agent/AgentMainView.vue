<script setup lang="ts" >
import AgentDashboardNavbar from '../../components/layout/AgentDashboardNavbar.vue';
import AgentDashboardSideMenu from '../../components/layout/AgentDashboardSideMenu.vue';

</script>

<template>
    <div class="flex items-start p-3 h-screen gap-3 w-screen bg-darkPrimary overflow-y-hidden justify-between" >
       <aside class="h-full flex basis-[230px] " >
        <AgentDashboardSideMenu/>
       </aside>
       <div class="rounded-md flex-1 bg-[#f9f9fc] h-full overflow-hidden" >
        <nav class="bg-white h-[10%]" >
            <AgentDashboardNavbar/>
        </nav>
               <!-- <div class="bg-white" > -->
        <router-view></router-view>
       </div>
       <!-- </div> -->
    </div>
</template>