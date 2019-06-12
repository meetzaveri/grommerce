import { observable, action, computed } from 'mobx';

class HeaderStore {
  @observable items = [];
  @observable currentClasses = '';
  @observable nextClasses = 'menu-default';
  @observable clickIndex = 0;
  @observable menuClickCount = 0;

  @action
  addItem = item => {
    this.items.push(item);
  };

  @action setContainerClassnames = (
    clickIndex,
    strCurrentClasses,
    selectedMenuHasSubItems
  ) => {
    const currentClasses = strCurrentClasses
      ? strCurrentClasses.split(' ').filter(x => x != '')
      : '';
    console.log('currentClasses', strCurrentClasses);
    if (!selectedMenuHasSubItems) {
      if (currentClasses.includes('menu-default') && clickIndex % 4 == 0) {
        this.menuClickCount = 1;
      }
      if (currentClasses.includes('menu-sub-hidden') && clickIndex % 4 == 3) {
        this.menuClickCount = 1;
      }
    }

    if (clickIndex % 4 == 0) {
      if (
        currentClasses.includes('menu-default') &&
        currentClasses.includes('menu-sub-hidden')
      ) {
        this.nextClasses = 'menu-default menu-sub-hidden';
      } else if (currentClasses.includes('menu-default')) {
        this.nextClasses = 'menu-default';
      } else if (currentClasses.includes('menu-sub-hidden')) {
        this.nextClasses = 'menu-sub-hidden';
      } else if (currentClasses.includes('menu-hidden')) {
        this.nextClasses = 'menu-hidden';
      }
      this.menuClickCount = 0;
    } else if (clickIndex % 4 == 1) {
      if (
        currentClasses.includes('menu-default') &&
        currentClasses.includes('menu-sub-hidden')
      ) {
        this.nextClasses =
          'menu-default menu-sub-hidden main-hidden sub-hidden';
      } else if (currentClasses.includes('menu-default')) {
        this.nextClasses = 'menu-default sub-hidden';
      } else if (currentClasses.includes('menu-sub-hidden')) {
        this.nextClasses = 'menu-sub-hidden main-hidden sub-hidden';
      } else if (currentClasses.includes('menu-hidden')) {
        this.nextClasses = 'menu-hidden main-show-temporary';
      }
    } else if (clickIndex % 4 == 2) {
      if (
        currentClasses.includes('menu-default') &&
        currentClasses.includes('menu-sub-hidden')
      ) {
        this.nextClasses = 'menu-default menu-sub-hidden sub-hidden';
      } else if (currentClasses.includes('menu-default')) {
        this.nextClasses = 'menu-default main-hidden sub-hidden';
      } else if (currentClasses.includes('menu-sub-hidden')) {
        this.nextClasses = 'menu-sub-hidden sub-hidden';
      } else if (currentClasses.includes('menu-hidden')) {
        this.nextClasses = 'menu-hidden main-show-temporary sub-show-temporary';
      }
    } else if (clickIndex % 4 == 3) {
      if (
        currentClasses.includes('menu-default') &&
        currentClasses.includes('menu-sub-hidden')
      ) {
        this.nextClasses = 'menu-default menu-sub-hidden sub-show-temporary';
      } else if (currentClasses.includes('menu-default')) {
        this.nextClasses = 'menu-default sub-hidden';
      } else if (currentClasses.includes('menu-sub-hidden')) {
        this.nextClasses = 'menu-sub-hidden sub-show-temporary';
      } else if (currentClasses.includes('menu-hidden')) {
        this.nextClasses = 'menu-hidden main-show-temporary';
      }
    }
    if (currentClasses.includes('menu-mobile')) {
      this.nextClasses += ' menu-mobile';
    }
  };
  @action clickOnMobileMenu = () => {};
  @action logoutUser = () => {};

  @computed
  get itemCount() {
    return this.items.length;
  }
  @computed
  get classNames() {
    return {
      containerClassnames: this.nextClasses,
      menuClickCount: this.clickIndex
    };
  }
}

const headerStore = new HeaderStore();

export default headerStore;
