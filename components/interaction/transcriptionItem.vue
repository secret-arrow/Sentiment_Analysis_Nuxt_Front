<template>
    <div class="flex flex-row items-start py-2 rounded-lg px-2"
        :class="[
            data.speaker == 'Speaker 1' ? 'justify-start' : 'justify-end',
            store.state.currentSentence == data.index ? 'bg-gray-100 border-y-[2px] border-y-[#28025A]' : ''
        ]"
    >
        <p v-if="data.speaker == 'Speaker 1'"
            class="p-1 mt-7 mr-1 text-[12px] font-semibold rounded-full bg-indigo-200 text-indigo-800">S1</p>
        <div class="w-[70%]">
            <p class="mx-3 text-gray-700" :class="data.speaker == 'Speaker 1' ? 'text-left' : 'text-right'">{{ data.speaker }}
                : {{ data.duration }}</p>
            <p class="rounded-md border-[2px] p-3 -mb-2"
                :class="data.speaker == 'Speaker 1' ? 'border-gray-400 bg-gray-200' : 'border-indigo-600 bg-indigo-100 text-right'">
            <p v-html="highlightWordInSentence(data.text, searchText)"></p>
            </p>
            <span v-if="data.sentiment == 'Positive'" class="rounded-full p-2 ml-2"
                :class="data.speaker == 'Speaker 1' ? 'bg-gray-200' : 'bg-indigo-100'">
                <q-icon name="sentiment_satisfied_alt" size="sm" color="green" class="rounded-full" />
            </span>
            <span v-if="data.sentiment == 'Neutral'" class="rounded-full p-2 ml-2"
                :class="data.speaker == 'Speaker 1' ? 'bg-gray-200' : 'bg-indigo-100'">
                <q-icon name="sentiment_neutral" size="sm" color="purple" class="rounded-full" />
            </span>
            <span v-if="data.sentiment == 'Negative'" class="rounded-full p-2 ml-2"
                :class="data.speaker == 'Speaker 1' ? 'bg-gray-200' : 'bg-indigo-100'">
                <q-icon name="sentiment_very_dissatisfied" size="sm" color="red" class="rounded-full" />
            </span>
        </div>
        <p v-if="data.speaker == 'Speaker 2'"
            class="p-1 mt-7 ml-1 text-[12px] font-semibold rounded-full bg-indigo-900 text-white">S2</p>
    </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    searchText: {
        type: String,
        required: true,
    }
});

const highlightWordInSentence = (sentence, word) => {
    return sentence.replaceAll(word, `<span class="bg-yellow">${word}</span>`);
}

</script>