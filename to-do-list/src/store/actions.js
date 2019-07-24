import axios from 'axios'
import mutationsType from './mutationType'

const baseUrl = 'http://localhost:3001/todos';


const actions = {
    getTodos({commit}){
        axios.get(baseUrl).then(response => {
            commit(mutationsType.GET_ALL_ITEM,response.data);
            commit(mutationsType.SHOW_ALL);
        }).catch(error => console.log(error))
    },
    addTodo({commit,dispatch},item){
        axios.post(baseUrl,item).then(response => {
            commit(mutationsType.GET_ALL_ITEM,response.data);
            dispatch('getTodos');
        }).catch(error => console.log(error))
    },
    deleteTodo({commit,dispatch},id){
        axios.delete(`${baseUrl}/${id}`).then( () => {
            dispatch('getTodos');
        }).catch(error => console.log(error))
    },
    updateTodo({dispatch},item){
        debugger;
        axios.put(baseUrl,item).then(() => {
            dispatch('getTodos');
        }).catch(error => console.log(error))
    }

}

export default actions;