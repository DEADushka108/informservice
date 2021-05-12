import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';

const RoutingScreen = (props) => {
  const {match} = props;
  const {path} = match;

  return <React.Fragment>
    <Header path={path}/>
    <main className="page-main">
      <h1>Routing</h1>
    </main>
    <Footer/>
  </React.Fragment>;
};

RoutingScreen.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  })
};

export default RoutingScreen;
