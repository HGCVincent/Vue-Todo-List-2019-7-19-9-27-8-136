import mutationsType from './mutationType'

export default {
    [mutationsType.PUT_ITEM_TO_LIST](state,item){
        state.list.push(item);
    },
    [mutationsType.GET_ALL_ITEM](state,allItems){
        state.allItemList = allItems;
    },
    [mutationsType.SHOW_ALL](state){
        state.list = state.allItemList;
    },
    [mutationsType.SHOW_ACTIVE](state){
        state.list = state.allItemList.filter(item => item.status === true);
    },
    [mutationsType.SHOW_COMPLETE](state){
        state.list = state.allItemList.filter(item => item.status === false);
    }
}