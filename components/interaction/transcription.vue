<template>
    <div class="p-5">
        <div class="w-full mt-3">
            <p class="font-bold text-2xl">Activity details</p>
            <p class="font-bold text-xl underline text-indigo-500 mt-1">Transcription</p>
        </div>
        <div class="flex justify-between items-end mb-2">
            <p class="text-lg font-semibold">Overall contact sentiment</p>
            <div class="flex gap-2">
                <div class="rounded-full bg-gray-200 p-1">
                    <q-icon name="sentiment_satisfied_alt" size="md" color="green" class="rounded-full"/>
                </div>
                <div class="rounded-full bg-gray-200 p-1">
                    <q-icon name="sentiment_neutral" size="md" color="purple" class="rounded-full"/>
                </div>
                <div class="rounded-full bg-gray-200 p-1">
                    <q-icon name="sentiment_very_dissatisfied" size="md" color="red" class="rounded-full"/>
                </div>
            </div>
        </div>
        <div class="px-3 border-gray-400 border-[2px] rounded-md">
            <q-input v-model="searchText" borderless dense placeholder="Search transcription" input-class="text-black text-semiblod text-[16px]">
                <template v-slot:prepend>
                    <q-icon name="search" color="gray-500"/>
                </template>
                <template v-slot:append>
                    <q-icon name="close" color="gray-500" @click="searchText = ''" class="cursor-pointer" />
                </template>
            </q-input> 
        </div>
        <div v-if="store.state.sentiments.length!=0" class="border-gray-400 border-[2px] border-t-0 rounded-lg rounded-t-none p-3 py-5">
            <TranscriptionItem v-for="item in searchList" :data="item" :searchText="searchText"/>
        </div>
    </div>
</template>
<script setup>
import {ref, watch, onBeforeMount} from "vue";
import {useStore} from "vuex";
import TranscriptionItem from "~~/components/interaction/transcriptionItem.vue";

const store = useStore();

const searchText=ref("");
const searchList = ref([]); 

onBeforeMount(()=>{
    searchList.value = store.state.sentiments;  
})

watch(()=>searchText.value, ()=>{
    // if(searchText.value){
        searchList.value = store.state.sentiments.filter(item => item.text.includes(searchText.value))
        // .map(item => {
        //     let subList = item.text.split(searchText.value);
        //     subList.flatMap((subText, index) => index < subList.length - 1 ? [subText, searchText.value] : [subText]);
        //     return {...item, text: subList}
        // })
    // }
    // else
    //     searchList.value = store.state.sentiments;
})

</script>