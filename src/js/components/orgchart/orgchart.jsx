import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import {connect} from 'react-redux';
import {getUsersList} from '../../store/users/selectors';
import {userDetails} from '../../types/user';
import Chart from '../chart/chart';

const Orgchart = (props) => {
  const {match, users} = props;
  const {path} = match;

  return <React.Fragment>
    <Header path={path}/>
    <main className="page-main">
      <div className="page-main__wrapper">
        <h1 className="visually-hidden">Orgchart</h1>
        <Chart users={users}/>
      </div>
    </main>
    <Footer/>
  </React.Fragment>;
};

Orgchart.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
  users: userDetails,
};

const mapStateToProps = (state) => ({
  users: getUsersList(state),
});

export default connect(mapStateToProps)(Orgchart);
