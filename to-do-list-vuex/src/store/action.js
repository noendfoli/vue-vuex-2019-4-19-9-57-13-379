import axios from 'axios'
export default {
    getlist(){
        let destination =  "http://localhost:8080/todolists"
        this.$axios.get(destination).then((response)=>{
        var items = response.data
        this.$store.commit("getData",items)
      })
    },
    addItem(item){
      this.$axios({
        method:'post',
        url:'http://localhost:8080/todolists',
        data:{
          'item':item.msg
        }
      });
    },
    getHttp(){
        let destination =  "http://localhost:8080/todolists"
        this.$axios.get(destination).then((response)=>{
            this.$store.commit("getData",response.data)
        })
    },
    postHtt(){
        this.$axios({
            method:'post',
            url:'http://localhost:8080/todolists',
            data:{
              'item':item.content
            }
         });
    }
 }
  