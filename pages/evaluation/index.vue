<template>
    <q-page class="bg-white text-black">
        <div class="flex justify-between items-center py-6 px-10 shadow-xl">
          <p class="text-xl font-bold">Evaluation</p>
          <q-btn no-caps color="[#28025A]" label="New Record" @click="()=>store.commit('handleNewRecord', true)"/>
        </div>
        <div class="flex justify-around px-5 py-7 border-[1px] border-b-gray-300">
          <div class="flex flex-col items-center">
            <p class="text-[20px] font-bold pb-3">Average Score</p>
            <p class="text-gray-600 text-[18px] font-semibold">88 evaluations</p>
            <div class="flex items-center">
              <p class="text-[24px] font-[900] px-2">63%</p>
              <q-icon color="red" size="lg" name="trending_down"/>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <p class="text-[20px] font-bold pb-3">Top Skills</p>
            <p class="text-gray-600 text-[18px] font-semibold">Empathy</p>
            <p class="text-[24px] font-[900] px-2 text-green-600">83%</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="text-[20px] font-bold pb-3">Bottom Skill</p>
            <p class="text-gray-600 text-[18px] font-semibold">Policy Knowledge</p>
            <p class="text-[24px] font-[900] px-2 text-red-500">55%</p>
          </div>
        </div>
        <div class="shadow-xl grid grid-cols-12 py-5 px-5 text-lg font-bold bg-gray-200">
          <p class="col-span-3">Agent</p>
          <p class="col-span-1">Queues</p>
          <p class="col-span-2">Team</p>
          <p class="col-span-2">Status</p>
          <p class="col-span-1">Score</p>
          <p class="col-span-3">Date</p>
        </div>
        <q-list padding class="">
            <q-item 
                clickable 
                v-ripple 
                active-class="border-x-[5px] border-l-[#28025A] border-r-transparent"
                active
                class="text-black text-lg border-b-[1px] border-gray-300 py-4" 
                @click="()=>router.push('/evaluation/hdsfkjds')"
            >
              <q-item-section>
                <div class="grid grid-cols-12 items-center">
                  <p class="col-span-3 text-[#28025A] text-bold">Agent</p>
                  <p class="col-span-1 rounded-full px-3 py-1 bg-[#28025A] text-white text-sm w-fit h-fit">+1</p>
                  <p class="col-span-2 text-[16px]">Support</p>
                  <p class="col-span-2 rounded-full px-3 py-0 bg-[#28025A] text-white text-[12px] w-fit h-fit">AI scored</p>
                  <p class="col-span-1 text-[16px]">75%</p>
                  <p class="col-span-3 text-[16px]">May 25, 2024, 8:25 AM</p>
                </div>
              </q-item-section>
            </q-item>
        </q-list>
        
    </q-page>
</template>
<script setup>
import {onBeforeMount} from "vue" 
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {getFileList} from "../actions/index"

const store = useStore()
const router = useRouter()

onBeforeMount(()=>{
    getFileList(store)
})

useHead({
      title: 'evaluation',
      meta: [
        {
          hid: 'evaluation',
          name: 'evaluation',
          content: 'evaluation'
        }
      ]
});
</script>
