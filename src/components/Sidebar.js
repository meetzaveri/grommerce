import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
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
    return (
      <div className="sidebar">
        <div className="main-menu">
          <div className="scroll">
            <PerfectScrollbar
              option={{ suppressScrollX: true, wheelPropagation: false }}
            >
              <Nav vertical className="list-unstyled">
                {sidebarItems.map((item, i) => {
                  return (
                    <NavItem key={i}>
                      <Link to={item.link}>
                        <i className={item.icon} /> <span>{item.title}</span>
                      </Link>
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
