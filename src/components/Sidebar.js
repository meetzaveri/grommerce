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
                    <NavItem key={i}>
                      <NavLink
                        to={item.link}
                        onClick={e =>
                          this.changeSelectedParentHasNoSubmenu(e, item.title)
                        }
                      >
                        <i className={item.icon} /> <span>{item.title}</span>
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
