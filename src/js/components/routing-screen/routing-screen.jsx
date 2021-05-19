import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import RouteCard from '../route-card/route-card';

const RoutingScreen = (props) => {
  const {match} = props;
  const {path} = match;

  return <React.Fragment>
    <Header path={path}/>
    <main className="page-main">
      <div className="page-main__wrapper">
        <h1 className="visually-hidden">Routing</h1>
        <RouteCard />
      </div>
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
