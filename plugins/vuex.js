import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            loading: true,           
            fileList: [],
            sentiments: [],
            notification: {},
            newRecord: false,
            currentSentence: -1,
        };
    },
    mutations: {
        handleFileList(state, payload) {state.fileList = payload; },
        handleSentiments(state, payload) {state.sentiments = payload; },
        handleloading(state, payload) {state.loading = payload; },
        handleNotification(state, payload) { state.notification = payload; },
        handleNewRecord(state, payload) { state.newRecord = payload; },
        handleCurrentSentence(state, payload) { state.currentSentence = payload; }
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
});
