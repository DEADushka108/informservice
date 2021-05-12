import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';

const Orgchart = (props) => {
  const {match} = props;
  const {path} = match;

  return <React.Fragment>
    <Header path={path}/>
    <main>
      <h1>Orgchart</h1>
    </main>
    <Footer/>
  </React.Fragment>;
};

Orgchart.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  })
};

export default Orgchart;
