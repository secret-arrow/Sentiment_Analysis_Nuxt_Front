import {Axios} from './basic';

export const getFileList = (store) => {
    Axios('post','/get_file_list')
    .then(res=>{
        store.commit('handleFileList', res.data);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message: err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getSentiments = (store, filename) => {
    Axios('post','/get_sentiments', {filename})
    .then(res=>{
        store.commit('handleSentiments', res.data);
        store.commit("handleloading", false);
    })
    .catch(err=>{
        store.commit("handleloading", false);
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}