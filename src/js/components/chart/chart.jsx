import React, {PureComponent} from 'react';
import {userDetails} from '../../types/user';
import OrganizationChart from '@dabeng/react-orgchart';
import ChartNode from '../chart-node/chart-node';

class Chart extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {users} = this.props;

    return <OrganizationChart
      datasource={users}
      draggable={true}
      collapsible={false}
      pan={true}
      chartClass="chart"
      NodeTemplate={ChartNode}
    />;
  }
}

Chart.propTypes = {
  users: userDetails,
};

export default Chart;
