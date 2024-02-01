<template>
    <q-page class="bg-white text-black">
        <div class="p-5">
            <p v-for="file in store.state.fileList" class="p-1 mb-1 text-xl font-semibold cursor-pointer hover:underline" @click="()=>{store.commit('handleloading', true); router.push(`/interaction-analytics/${file}`);}">{{file}}</p>
        </div>
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
      title: 'Sentiment',
      meta: [
        {
          hid: 'Home',
          name: 'Home',
          content: 'Sentiment Analisys'
        }
      ]
});
</script>
