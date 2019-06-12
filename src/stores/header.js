import { observable, action, computed } from 'mobx';

class HeaderStore {
  @observable items = [];

  @action
  addItem = item => {
    this.items.push(item);
  };

  @computed
  get itemCount() {
    return this.items.length;
  }
}

const headerStore = new HeaderStore();

export default headerStore;
