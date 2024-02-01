<script setup lang="ts">

import HeaderComponent from '../components/header/headerComponent.vue';
import LeftSideBarComponent from '../components/sidebar/sidebarComponent.vue';   
import NewRecord from '../components/dialog/NewRecord.vue';

import { useQuasar } from 'quasar';
import { useStore } from "vuex";
import { watch } from "vue";

const store = useStore();
const not = useQuasar();

watch(()=>store.state.notification,()=>{
    not.notify({
        message: store.state.notification.type,
        caption: store.state.notification.message,
        icon: store.state.notification.type == 'Success'?'done':'info',
        iconColor: store.state.notification.type == 'Success'?'green':'red',
        color: 'white',
        textColor: 'dark',
        position: 'top-right',
        progress:true,
        multiLine: true,
        timeout: 2000,
    }); 
});

</script>

<template>
    <q-layout view="hHh Lpp lff">
        <!-- Header -->
        <HeaderComponent />
        <!-- SideBar -->
        <LeftSideBarComponent />
        
        <!-- Container -->
        <q-page-container class="bg-gray-900">
                <NuxtPage />
                <div
                    class="text-sm font-normal text-center p-3"
                    style="background-color: #151515; color: #7d8396;"
                    >Copyright 2023 Sentiment Analysis
                </div>
        </q-page-container> 

        <NewRecord />
    </q-layout>
</template>
