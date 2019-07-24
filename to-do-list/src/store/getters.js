export default{
    getAllList(state) {
        return state.allItemList;
    },
    getActiveList(state) {
        return state.allItemList.filter(item => item.status === true);
    },
    getCompleteList(state) {
        return state.allItemList.filter(item => item.status === false);
    },
}