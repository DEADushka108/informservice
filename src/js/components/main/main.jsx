import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

const Main = (props) => {
  const {match} = props;
  const {path} = match;

  return <React.Fragment>
    <Header path={path}/>
    <main className="page-main">
      <div className="page-main__wrapper">
        <h1 className="visually-hidden">Main page</h1>
        <section className="task">
          <div className="task__orgchart">
            <img src="./img/content/orgchart.jpg" alt="Task1 image" />
            <ul className="task__list">
              <li className="task__item">
                <p className="task__text">
                  <span className="task__type">Task: </span>
                  <span className="task__value">create orgchart</span>
                </p>
              </li>
              <li className="task__item">
                <p className="task__text">
                  <span className="task__type">Description: </span>
                  <span className="task__value">Complex instruments for create and edit organization chart</span>
                </p>
              </li>
              <li className="task__item">
                <p className="task__text">
                  <span className="task__type">Used technology: </span>
                  <span className="task__value">React, Redux, Webpack</span>
                </p>
              </li>
            </ul>
            <div className="task__links">
              <a className="task__link" href="#">How to use</a>
              <Link to={AppRoute.ORGCHART} className="task__link">Orgchart</Link>
            </div>
          </div>
          <div className="task__orgchart">
            <img src="./img/content/routing.jpg" alt="Task2 image" />
            <ul className="task__list">
              <li className="task__item">
                <p className="task__text">
                  <span className="task__type">Task: </span>
                  <span className="task__value">Create documents router</span>
                </p>
              </li>
              <li className="task__item">
                <p className="task__text">
                  <span className="task__type">Description: </span>
                  <span className="task__value">Instrument for creating documents routing</span>
                </p>
              </li>
              <li className="task__item">
                <p className="task__text">
                  <span className="task__type">Used technology: </span>
                  <span className="task__value">React, Redux, Webpack</span>
                </p>
              </li>
            </ul>
            <div className="task__links">
              <a className="task__link" href="#">How to use</a>
              <Link to={AppRoute.ROUTING} className="task__link">Orgchart</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer/>
  </React.Fragment>;
};

Main.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  })
};

export default Main;

