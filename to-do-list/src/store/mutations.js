
export default {
    putItemToList(state,item){
        state.list.push(item);
    },
    getAllItem(state,allItems){
        state.allItemList = allItems;
    },
    showAll(state){
        state.list = state.allItemList;
    },
    showComplete(state){
        state.list = state.allItemList.filter(item => item.status === false);
    },
    showActive(state){
        state.list = state.allItemList.filter(item => item.status === true);
    }
}