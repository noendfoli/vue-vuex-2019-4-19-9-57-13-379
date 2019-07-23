
export default {
  getData(stata,items){
    items.map((a) =>{
        let item = {
          content: a.item,
          isChecked: false
      }
       state.showItems.push(item),
       state.listItems.push(item)
      })
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
  