import axios from 'axios'
export default {
  getlist({ commit }) {
    let destination = "http://localhost:8848/todolists"
    axios.get(destination).then((response) => {
      var items = response.data
      commit("getData", items)
    })
  },
  addItem({ commit }, item) {
    let statuCode = 0
    if(item.isChecked){
      statuCode = 1
    }
    axios.post('http://localhost:8848/todolists', {
      'item': item.content,
      'status': statuCode
    })
    .then(function (response) {
    })
    .catch(function (error) {
      if(error.response.status===400){
        alert("不能重复添加！！")
      }
    });
  },
  delItem({ commit },item) {
    let statuCode = 0
    if(item.isChecked){
      statuCode = 1
    }
    axios({
      method:'delete',
      url:'http://localhost:8848/todolists',
      data:{
        'item': item.content,
        'status': statuCode
      }
    })
    commit('delItem',item)
  },
  updateItem({ commit },item){
    let statuCode = 0
    if(item.isChecked){
      statuCode = 1
    }
    axios.put('http://localhost:8848/todolists', {
      'item': item.content,
      'status': statuCode
    })
    .then(function (response) {
      
    })
    .catch(function (error) {
      if(error.response.status===400){
        alert("不能重复添加！！")
      }
    });
  }
}
