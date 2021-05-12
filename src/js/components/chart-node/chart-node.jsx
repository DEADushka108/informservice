import React from 'react';
import PropTypes from 'prop-types';

const ChartNode = (props) => {
  const {nodeData} = props;

  return (
    <div className="chart__user" onClick={() => {}}>
      <div className="chart__title">{nodeData.title}</div>
      <div className="chart__name">
        <p className="chart__text">{nodeData.name}</p>
        <img className="chart__photo" src={nodeData.photo} alt="User's photo"/>
      </div>
    </div>
  );
};

ChartNode.propTypes = {
  nodeData: PropTypes.object.isRequired,
};

export default ChartNode;
