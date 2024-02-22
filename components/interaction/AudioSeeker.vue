<template>
    <audio ref="audio" :src="`${baseURL}/uploads/${fileName}`" preload="auto"/>
    <div class="w-full px-5 py-1">
        <div class="flex justify-end">
            <p class="rounded-full px-5 py-1 bg-blue-800 text-white">{{ `${timeFormat(currentTime)} / ${audio ?
                timeFormat(audio.duration) : '00:00'}` }}</p>
        </div>
        <div class="flex">
            <div class="rounded-full bg-amber my-auto -mr-4 z-10">
                <q-icon name="person" size="sm" color="white" class="m-1 rounded-full" />
            </div>
            <div class="relative z-1 grow bg-gray-300 -mb-2 p-3 rounded-t-md">
                <!-- <span v-for="sentence in store.state.sentiments" :class="`absolute left-[${reverseTime(sentence.end)/audio.duration*100}%] z-[${sentence.index+10}] w-fit`">
                    <span v-if="sentence.sentiment != 'Neutral'">
                        <q-icon
                        :name="sentence.sentiment == 'Positive' ? 'sentiment_satisfied_alt' : 'sentiment_very_dissatisfied'"
                        size="sm" 
                        :color="sentence.sentiment == 'Positive' ? 'green' : 'red'"
                        class="rounded-full" 
                        />
                    </span>
                </span> -->
            </div>
        </div>
        <div class="bg-gray-300 ml-4">
            <q-slider disable v-model="progressbar" color="blue" track-color="white" :min="0" :max="100" track-size="8px"
                thumb-size="0px" />
        </div>
        <div class="flex">
            <div class="rounded-full bg-blue-900 my-auto -mr-4 z-10">
                <q-icon name="how_to_reg" size="sm" color="white" class="m-1 rounded-full" />
            </div>
            <div class="grow bg-gray-300 -mt-2 p-3 rounded-b-lg">
                <q-icon name="sentiment_very_dissatisfied" size="sm" color="red" class="rounded-full" />
            </div>
        </div>
        <div class="bg-gray-200 rounded-md flex justify-center items-center gap-5 p-3 mt-3 ml-4">
            <q-icon name="replay" class="cursor-pointer" color="black" size="sm"
                @click="() => { currentTime = 0; isPlay = true; audio.play(); audio.currentTime = 0.0; store.commit('handleCurrentSentence', 0); }"></q-icon>
            <q-icon :name="isPlay ? 'pause' : 'play_arrow'" color="black" size="md" class="cursor-pointer" @click="() => {
                if (isPlay)
                    audio.pause();
                else
                    audio.play();
                    isPlay = !isPlay;
            }" />
            <q-icon :name="isMute ? 'volume_off' : 'volume_up'" class="cursor-pointer" color="black" size="sm"
                @click="() => isMute = !isMute"></q-icon>
            <q-slider v-model="volume" class="cursor-pointer black max-w-[100px]" color="black" track-color="white" :min="0"
                :max="100" track-size="7px" thumb-size="0px" />
            <q-btn-dropdown flat padding="3px 10px" content-class="bg-gray-200 text-gray-900 p-2" :label="`x ${playSpeed}`">
                <q-list>
                    <q-item clickable v-close-popup @click="() => { playSpeed = 0.5; audio.playbackRate = 0.5; }">
                        <q-item-section>
                            <q-item-label class="text-black">0.5</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="() => { playSpeed = 1.0; audio.playbackRate = 1.0; }">
                        <q-item-section>
                            <q-item-label class="text-black">1.0</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="() => { playSpeed = 1.5; audio.playbackRate = 1.5; }">
                        <q-item-section>
                            <q-item-label class="text-black">1.5</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="() => { playSpeed = 2.0; audio.playbackRate = 2.0; }">
                        <q-item-section>
                            <q-item-label class="text-black">2.0</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
        </div>
    </div>
</template>
<script setup>
import { ref, watch, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router"
import { baseURL } from "../../actions/basic.js";

const audio = ref();
const isPlay = ref(false);
const isMute = ref();
const volume = ref(100);
const playSpeed = ref(1.0);
const currentTime = ref(0.0);
const progressbar = ref(0);
const store = useStore();
const route = useRoute();
const fileName = route.params.id.toString();
let timerId;

watch(volume, () => {
    audio.value.volume = volume.value / 100.0;
});
watch(isMute, () => {
    audio.value.muted = isMute.value;
});
watch(currentTime, () => {
    // audio.value.currentTime = currentTime.value;
    // console.log(store.state.sentiments)
    if (currentTime.value == 0.1) {
        store.commit('handleCurrentSentence', 0)
    }
    else if (currentTime.value > reverseTime(store.state.sentiments[store.state.currentSentence]["end"]))
        store.commit('handleCurrentSentence', store.state.currentSentence + 1)
});
watch(isPlay, () => {
    if (isPlay && !timerId) {
        if(currentTime.value == 0.0) 
            audio.value.currentTime = 0.0
        timerId = setInterval(count, 100);
    }
    else {
        clearInterval(timerId);
        timerId = null;
    }
});
const count = () => {
    currentTime.value = Math.round((currentTime.value + 0.1 * playSpeed.value) * 100) / 100.0;
    progressbar.value = currentTime.value / audio.value.duration * 100;
    if (progressbar.value > 100) {
        isPlay.value = false;
        progressbar.value = 0.0;
        clearInterval(timerId);
        timerId = null;
        audio.value.stop();
        isPlay.value = false;
        currentTime.value = 0.0;
    }
}
const timeFormat = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
}
const reverseTime = (timeStr) => {
    let timeList = timeStr.split(":");
    return parseInt(timeList[0]) * 3600 + parseInt(timeList[1]) * 60 + parseInt(timeList[2])
}
</script>