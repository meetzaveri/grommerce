import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { routes } from '../config/routes';

import { inject, observer } from 'mobx-react';

const sidebarItems = [
  {
    link: routes.dashboard,
    title: 'Dashboard',
    icon: 'simple-icon-grid'
  },
  {
    link: routes.allProducts,
    title: 'All Products',
    showStatus: ['active'],
    icon: 'iconsminds-shop-3'
  }
];

@inject('headerStore')
@observer
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleWindowResize(event) {
    if (event && !event.isTrusted) {
      return;
    }
    let { nextClasses } = this.props.headerStore;
    nextClasses = this.getMenuClassesForResize(nextClasses);
    this.props.headerStore.setContainerClassnames(
      0,
      nextClasses.join(' '),
      this.props.headerStore.selectedMenuHasSubItems
    );
  }

  getMenuClassesForResize(classes) {
    const {
      menuHiddenBreakpoint,
      subHiddenBreakpoint
    } = this.props.headerStore;
    let nextClasses = classes.split(' ').filter(x => x != '');
    const windowWidth = window.innerWidth;
    if (windowWidth < menuHiddenBreakpoint) {
      nextClasses.push('menu-mobile');
    } else if (windowWidth < subHiddenBreakpoint) {
      nextClasses = nextClasses.filter(x => x != 'menu-mobile');
      if (
        nextClasses.includes('menu-default') &&
        !nextClasses.includes('menu-sub-hidden')
      ) {
        nextClasses.push('menu-sub-hidden');
      }
    } else {
      nextClasses = nextClasses.filter(x => x != 'menu-mobile');
      if (
        nextClasses.includes('menu-default') &&
        nextClasses.includes('menu-sub-hidden')
      ) {
        nextClasses = nextClasses.filter(x => x != 'menu-sub-hidden');
      }
    }
    return nextClasses;
  }
  setSelectedLiActive() {
    const oldli = document.querySelector('.sub-menu  li.active');
    if (oldli != null) {
      oldli.classList.remove('active');
    }

    /* set selected parent menu */
    const selectedlink = document.querySelector('.sub-menu  a.active');
    if (selectedlink != null) {
      selectedlink.parentElement.classList.add('active');
      this.setState({
        selectedParentMenu: selectedlink.parentElement.parentElement.getAttribute(
          'data-parent'
        )
      });
    } else {
      var selectedParentNoSubItem = document.querySelector(
        '.main-menu  li a.active'
      );
      if (selectedParentNoSubItem != null) {
        this.setState({
          selectedParentMenu: selectedParentNoSubItem.getAttribute('data-flag')
        });
      } else if (this.state.selectedParentMenu == '') {
        this.setState({
          selectedParentMenu: 'dashboards'
        });
      }
    }
  }

  getContainer() {
    return ReactDOM.findDOMNode(this);
  }

  handleProps() {
    this.addEvents();
  }

  addEvents() {
    ['click', 'touchstart'].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }
  removeEvents() {
    ['click', 'touchstart'].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
    this.handleProps();
    this.setSelectedLiActive();
  };

  componentWillUnmount() {
    this.removeEvents();
    window.removeEventListener('resize', this.handleWindowResize);
  }

  changeSelectedParentHasNoSubmenu(e, menu) {
    this.setState({
      viewingParentMenu: menu
    });
  }

  toggle() {
    const { nextClasses, menuClickCount } = this.props.headerStore;
    const currentClasses = nextClasses
      ? nextClasses.split(' ').filter(x => x != '')
      : '';

    if (currentClasses.includes('menu-sub-hidden') && menuClickCount == 3) {
      this.props.headerStore.setContainerClassnames(
        2,
        nextClasses,
        this.props.headerStore.selectedMenuHasSubItems
      );
    } else if (
      currentClasses.includes('menu-hidden') ||
      currentClasses.includes('menu-mobile')
    ) {
      this.props.headerStore.setContainerClassnames(
        0,
        nextClasses,
        this.props.headerStore.selectedMenuHasSubItems
      );
    }
  }

  render() {
    console.log('props', this.props);
    return (
      <div className="sidebar">
        <div className="main-menu">
          <div className="scroll">
            <PerfectScrollbar
              option={{ suppressScrollX: true, wheelPropagation: false }}
            >
              <Nav vertical className="list-unstyled">
                {/* If menu item has no sub items. Note: If you want use hasn't sub
                menu item : Set the menu default type to menu-sub-hidden */}
                {sidebarItems.map((item, i) => {
                  return (
                    <NavItem
                      key={i}
                      className={classnames({
                        active:
                          (this.state.selectedParentMenu == item.link &&
                            this.state.viewingParentMenu == '') ||
                          this.state.viewingParentMenu == item.title
                      })}
                    >
                      <NavLink
                        to={item.link}
                        onClick={e =>
                          this.changeSelectedParentHasNoSubmenu(e, item.title)
                        }
                      >
                        <i className={item.icon} /> <span>{item.title}</span>
                        {/* <IntlMessages id="menu.dashboards" /> */}
                      </NavLink>
                    </NavItem>
                  );
                })}
              </Nav>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
