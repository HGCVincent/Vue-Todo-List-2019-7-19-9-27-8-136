import axios from 'axios'

const baseUrl = 'http://localhost:3001/todos';


const actions = {
    getTodos({commit}){
        axios.get(baseUrl).then(response => {
            commit('getAllItem',response.data);
            commit('showAll');
        }).catch(error => console.log(error))
    },
    addTodo({commit,dispatch},item){
        axios.post(baseUrl,item).then(response => {
            commit('putItemToList',response.data);
            dispatch('getTodos');
        }).catch(error => console.log(error))
    },
    deleteTodo({commit,dispatch},id){
        axios.delete(`http://localhost:3001/todos/${id}`).then( () => {
            dispatch('getTodos');
        }).catch(error => console.log(error))
    },
    updateTodo({dispatch},id,content){
        axios.patch(baseUrl,id,content).then(() => {
            dispatch('getTodos');
        }).catch(error => console.log(error))
    }

}

export default actions;