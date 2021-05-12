import React from 'react';
import PropTypes from 'prop-types';

const ChartNode = (props) => {
  const {nodeData} = props;

  return (
    <div className="chart__user">
      <div className="chart__title">
        <p>{nodeData.title}</p>
      </div>
      <div className="chart__name">
        <p className="chart__text">{nodeData.name}</p>
        <img className="chart__photo" src={nodeData.photo} width="35" height="35" alt="User's photo"/>
      </div>
      {nodeData.children && nodeData.children.length !== 0 ? <svg width="13" height="13" viewBox="0 0 25.96 25.96" className="chart__icon">
        <use xlinkHref="#social-group"></use>
      </svg>
        :
        null}
    </div>
  );
};

ChartNode.propTypes = {
  nodeData: PropTypes.object.isRequired,
};

export default ChartNode;
