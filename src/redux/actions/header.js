import {
  MENU_SET_CLASSNAMES,
  MENU_CONTAINER_ADD_CLASSNAME,
  MENU_CLICK_MOBILE_MENU,
  MENU_CHANGE_DEFAULT_CLASSES,
  MENU_CHANGE_HAS_SUB_ITEM_STATUS,
  LOGOUT_USER
} from 'redux/actions/types';

let isAuthorized = false;

function checkAuthorization() {
  if (localStorage.getItem('token').length > 0) {
    isAuthorized = true;
    return isAuthorized;
  } else {
    return isAuthorized;
  }
}

export const changeSelectedMenuHasSubItems = payload => {
  return function(dispatch) {
    dispatch({
      type: MENU_CHANGE_HAS_SUB_ITEM_STATUS,
      payload: payload
    });
  };
};

export const changeDefaultClassnames = strCurrentClasses => {
  return function(dispatch) {
    dispatch({
      type: MENU_CHANGE_DEFAULT_CLASSES,
      payload: strCurrentClasses
    });
  };
};

export const addContainerClassname = (classname, strCurrentClasses) => {
  const newClasses =
    !strCurrentClasses.indexOf(classname) > -1
      ? strCurrentClasses + ' ' + classname
      : strCurrentClasses;
  return function(dispatch) {
    dispatch({
      type: MENU_CONTAINER_ADD_CLASSNAME,
      payload: newClasses
    });
  };
};

export const clickOnMobileMenu = strCurrentClasses => {
  const currentClasses = strCurrentClasses
    ? strCurrentClasses
        .split(' ')
        .filter(x => x != '' && x != 'sub-show-temporary')
    : '';
  let nextClasses = '';
  if (currentClasses.includes('main-show-temporary')) {
    nextClasses = currentClasses
      .filter(x => x != 'main-show-temporary')
      .join(' ');
  } else {
    nextClasses = currentClasses.join(' ') + ' main-show-temporary';
  }
  return function(dispatch) {
    dispatch({
      type: MENU_CLICK_MOBILE_MENU,
      payload: { containerClassnames: nextClasses, menuClickCount: 0 }
    });
  };
};

export const setContainerClassnames = (
  clickIndex,
  strCurrentClasses,
  selectedMenuHasSubItems
) => {
  const currentClasses = strCurrentClasses
    ? strCurrentClasses.split(' ').filter(x => x != '')
    : '';
  let nextClasses = '';

  if (!selectedMenuHasSubItems) {
    if (currentClasses.includes('menu-default') && clickIndex % 4 == 0) {
      clickIndex = 1;
    }
    if (currentClasses.includes('menu-sub-hidden') && clickIndex % 4 == 3) {
      clickIndex = 1;
    }
  }

  // Prateek Gogia just figuredout the logic why GOGO is using Redux for it. Good Job!

  if (clickIndex % 4 == 0) {
    if (
      currentClasses.includes('menu-default') &&
      currentClasses.includes('menu-sub-hidden')
    ) {
      nextClasses = 'menu-default menu-sub-hidden';
    } else if (currentClasses.includes('menu-default')) {
      nextClasses = 'menu-default';
    } else if (currentClasses.includes('menu-sub-hidden')) {
      nextClasses = 'menu-sub-hidden';
    } else if (currentClasses.includes('menu-hidden')) {
      nextClasses = 'menu-hidden';
    }
    clickIndex = 0;
  } else if (clickIndex % 4 == 1) {
    if (
      currentClasses.includes('menu-default') &&
      currentClasses.includes('menu-sub-hidden')
    ) {
      nextClasses = 'menu-default menu-sub-hidden main-hidden sub-hidden';
    } else if (currentClasses.includes('menu-default')) {
      nextClasses = 'menu-default main-hidden';
    }
  } else if (clickIndex % 4 == 2) {
    if (
      currentClasses.includes('menu-default') &&
      currentClasses.includes('menu-sub-hidden')
    ) {
      nextClasses = 'menu-default main-hidden';
    } else if (currentClasses.includes('main-hidden')) {
      nextClasses = 'menu-default';
    }
  } else if (clickIndex % 4 == 3) {
    if (
      currentClasses.includes('menu-default') &&
      currentClasses.includes('menu-sub-hidden')
    ) {
      nextClasses = 'menu-default menu-sub-hidden main-hidden sub-hidden';
    } else if (currentClasses.includes('menu-default')) {
      nextClasses = 'menu-default main-hidden';
    }
  }
  if (currentClasses.includes('menu-mobile')) {
    nextClasses += ' menu-mobile';
  }
  return function(dispatch) {
    dispatch({
      type: MENU_SET_CLASSNAMES,
      payload: {
        containerClassnames: nextClasses,
        menuClickCount: clickIndex,
        isAuthorized: checkAuthorization()
      }
    });
  };
};

export const logoutUser = history => {
  localStorage.removeItem('token');
  return function(dispatch) {
    dispatch({
      type: LOGOUT_USER,
      payload: { history }
    });
  };
};
