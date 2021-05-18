import React from 'react';
import PropTypes from 'prop-types';

const Tabs = (props) => {
  const {children, activeItem, onTabChange} = props;

  return <div className="route-card__desc">
    <nav className="route-nav route-card__nav">
      <ol className="route-nav__list">
        {children.map((child, index) => {
          const {title} = child.props;
          return <li key={`${title}-${index}`}
            className={`route-nav__item ${(activeItem === title) ? `route-nav__item--active` : ``}`}
            onClick={() => {
              onTabChange(title);
            }}>
            <a className="route-nav__link">{title}</a>
          </li>;
        })}
      </ol>
    </nav>
    {children.map((child) => {
      const {title, children: content} = child.props;

      return (title === activeItem) ? content : null;
    })}
  </div>;
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  activeItem: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default Tabs;
