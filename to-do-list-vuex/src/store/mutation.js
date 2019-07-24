
export default {
  getData(state, items) {
    items.map((a) => {
      let item = {
        content: a.item,
        isChecked: false
      }
      if (a.status === 1) {
        item.isChecked = true
      }
      state.showItems.push(item)
      state.listItems.push(item)
    })
  },
  addShowItems(state, item) {
    state.showItems.push(item),
      state.listItems.push(item)
  },
  complete(state) {
    state.showItems = state.showItems.filter(item => {
      return item.isChecked
    })
  },
  active(state) {
    state.showItems = state.showItems.filter(item => {
      return !item.isChecked
    })
  },
  all(state) {
    state.showItems = state.listItems.map(a => a)
  },
  delItem(state, item) {
    state.showItems = state.showItems.filter(at => {
      return at.content != item.content
    })
  }
}