import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

const Header = (props) => {
  const {path} = props;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <Link to={AppRoute.ROOT} className={`page-header__logo ${path === AppRoute.ROOT ? `page-header__logo--active` : ``}`}>
          OrgChart &amp; Routing
        </Link>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link to={AppRoute.ROOT} className={`main-nav__link ${path === AppRoute.ROOT ? `main-nav__link--active` : ``}`}>
                <span className="main-nav__text">Home</span>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.ORGCHART} className={`main-nav__link ${path === AppRoute.ORGCHART ? `main-nav__link--active` : ``}`}>
                <span className="main-nav__text">Orgchart</span>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.ROUTING} className={`main-nav__link ${path === AppRoute.ROUTING ? `main-nav__link--active` : ``}`}>
                <span className="main-nav__text">Routing</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Header;
