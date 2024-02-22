<template>
    <q-page class="bg-white text-black">
        <div v-if="!store.state.loading" class="flex overfolw-y-auto sticky top-0">
          <div class="w-[50%] sticky top-0">
            <TitleComponent />
            <AudioSeeker />
            <SummaryComponent />
          </div>
          <div class="w-[50%]">
            <Transcription />
          </div>
        </div>
    </q-page>
</template>
<script setup lang="ts">
import {useRoute} from 'vue-router';
import Transcription from "../../components/interaction/transcription.vue";
import AudioSeeker from "../../components/interaction/AudioSeeker.vue";
import TitleComponent from "../../components/interaction/TitleComponent.vue";
import SummaryComponent from "../../components/interaction/SummaryComponent.vue";
import { useQuasar, QSpinnerFacebook } from 'quasar';
import { onBeforeMount, onBeforeUnmount } from 'vue';
import {useStore} from 'vuex';
import {getSentiments} from "../../actions/index";

const store = useStore();
const route = useRoute();

const $q = useQuasar();

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

let timer
onBeforeMount(()=>{
  
  const callID = route.params.id.toString();
  getSentiments(store, callID);
  showLoading()
})

watch(() => store.state.loading, ()=>{
    $q.loading.hide();
});

onBeforeUnmount(() => {
  if (timer !== void 0) {
    clearTimeout(timer)
    $q.loading.hide()
  }
});

const showLoading = () => {
  $q.loading.show({
    spinner: QSpinnerFacebook,
    spinnerColor: 'blue',
    spinnerSize: 100,
    backgroundColor: 'white',
    message: 'Loding file and Analysing sentiments...',
    messageColor: 'black'
  })
}
</script>