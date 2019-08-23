import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import { inject, observer } from 'mobx-react';
@inject('headerStore')
@observer
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: false,
      firstName: '',
      lastName: '',
      role: '',
      email: '',
      notifcount: 0,
      isInFullScreen: false,
      searchKeyword: '',
      bgHEX: '#3363FF'
    };
    this.timer = 120000;
  }
  showProfile = () => {
    this.setState({
      profile: !this.state.profile
    });
  };

  udpateNotifCount = () => {
    var self = this;
    getNotificationCount(this.props.role, data => {
      self.setState({ notifcount: data.data.count });
    })();
  };

  setIntervalImmediately = (func, interval) => {
    func();
    return setInterval(func, interval);
  };

  menuButtonClick = (e, containerClassnames) => {
    e.preventDefault();
    setTimeout(() => {
      var event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);
    this.props.headerStore.setContainerClassnames(
      containerClassnames,
      this.props.selectedMenuHasSubItems
    );
  };

  mobileMenuButtonClick = (e, containerClassnames) => {
    e.preventDefault();
    this.props.clickOnMobileMenu(containerClassnames);
  };

  handleSearchIconClick = e => {
    if (window.innerWidth < menuHiddenBreakpoint) {
      let elem = e.target;
      if (!e.target.classList.contains('search')) {
        if (e.target.parentElement.classList.contains('search')) {
          elem = e.target.parentElement;
        } else if (
          e.target.parentElement.parentElement.classList.contains('search')
        ) {
          elem = e.target.parentElement.parentElement;
        }
      }

      if (elem.classList.contains('mobile-view')) {
        this.search();
        elem.classList.remove('mobile-view');
        this.removeEventsSearch();
      } else {
        elem.classList.add('mobile-view');
        this.addEventsSearch();
      }
    } else {
      this.search();
    }
  };
  addEventsSearch = () => {
    document.addEventListener('click', this.handleDocumentClickSearch, true);
  };
  removeEventsSearch = () => {
    document.removeEventListener('click', this.handleDocumentClickSearch, true);
  };

  handleDocumentClickSearch = e => {
    let isSearchClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains('navbar') ||
        e.target.classList.contains('simple-icon-magnifier'))
    ) {
      isSearchClick = true;
      if (e.target.classList.contains('simple-icon-magnifier')) {
        this.search();
      }
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      e.target.parentElement.classList.contains('search')
    ) {
      isSearchClick = true;
    }

    if (!isSearchClick) {
      const input = document.querySelector('.mobile-view');
      if (input && input.classList) input.classList.remove('mobile-view');
      this.removeEventsSearch();
      this.setState({
        searchKeyword: ''
      });
    }
  };
  handleSearchInputChange = e => {
    this.setState({
      searchKeyword: e.target.value
    });
  };
  handleSearchInputKeyPress = e => {
    if (e.key === 'Enter') {
      this.search();
    }
  };

  search = () => {
    this.props.history.push(searchPath + '/' + this.state.searchKeyword);
    this.setState({
      searchKeyword: ''
    });
  };
  isInFullScreen = () => {
    return (
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement &&
        document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement &&
        document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null)
    );
  };
  toggleFullScreen = () => {
    const isInFullScreen = this.isInFullScreen();

    var docElm = document.documentElement;
    if (!isInFullScreen) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    this.setState({
      isInFullScreen: !isInFullScreen
    });
  };

  handleLogout = () => {
    this.props.logoutUser(this.props.history);
  };

  render() {
    const { containerClassnames } = this.props.headerStore.classNames;

    return (
      <nav className="navbar fixed-top">
        <NavLink
          to="/"
          className="menu-button d-md-block"
          onClick={e => {
            this.menuButtonClick(e, containerClassnames);
          }}
        >
          {/* <Icon icon="ICON_LOGO" className="icon" /> */}
          <i className="iconsminds-align-justify-all" />
        </NavLink>

        <Link className="navbar-logo" to="/">
          {/* <span className="logo d-none d-xs-block" />
          <span className="logo-mobile d-block d-xs-none" /> */}
          <img
            src="https://res.cloudinary.com/reeversedev/image/upload/v1562266145/Grommerce_dtdki6.jpg"
            alt="Grommerce"
            className="logo"
          />
        </Link>

        <div className="ml-auto">
          <div className="header-icons d-inline-block align-middle">
            <div className="position-relative d-inline-block">
              <UncontrolledDropdown className="dropdown-menu-right">
                <DropdownToggle
                  className="header-icon notificationButton"
                  color="empty"
                >
                  <i className="simple-icon-bell" />
                  {this.state.notifcount > 0 ? (
                    <span className="count">{this.state.notifcount}</span>
                  ) : null}
                </DropdownToggle>
                <DropdownMenu
                  className="position-absolute mt-3 scroll"
                  right
                  id="notificationDropdown"
                />
              </UncontrolledDropdown>
            </div>

            <button
              className="header-icon btn btn-empty d-none d-sm-inline-block"
              type="button"
              id="fullScreenButton"
              onClick={this.toggleFullScreen}
            >
              {this.state.isInFullScreen ? (
                <i className="simple-icon-size-actual d-block" />
              ) : (
                <i className="simple-icon-size-fullscreen d-block" />
              )}
            </button>
          </div>
          <div className="user d-inline-block">
            <UncontrolledDropdown className="dropdown-menu-right">
              <DropdownToggle className="p-0" color="empty">
                <span className="mr-1">
                  {/* {user.firstName} {user.lastName} */}
                </span>
                <span>
                  {/* <img
                    alt="Profile"
                    src={profilePic}
                    style={{ backgroundColor: this.state.bgHEX }}
                  /> */}
                </span>
              </DropdownToggle>
              {/* <DropdownMenu className="mt-3" right>
                {this.props.dropDownItems.map((item, i) => {
                  if (item.type === 'link') {
                    return (
                      <Link to={item.to}>
                        <DropdownItem>
                          <i className={item.icon} /> {item.text}
                        </DropdownItem>
                      </Link>
                    );
                  } else if (item.type === 'divider') {
                    return <DropdownItem divider />;
                  } else if (item.type === 'logout') {
                    return (
                      <DropdownItem onClick={() => this.handleLogout()}>
                        <i className="simple-icon-power mr-2" /> Sign out
                      </DropdownItem>
                    );
                  }
                })}
              </DropdownMenu> */}
            </UncontrolledDropdown>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
