import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator as RouteCreator} from '../../store/route/route';
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {redirectToRoute} from '../../store/redirect/redirect';
import {AppRoute} from '../../utils/const';

const ConfirmCard = (props) => {
  const {
    routeOptions,
    routeName,
    routeDescription,
    subUnit,
    unit,
    division,
    messageOption,
    message,
    registration,
    onConfirmRoute,
    onValidRouteConfirm,
  } = props;

  const onConfirmButtonClick = () => {
    const route = {
      id: uuidv4(),
      type: routeOptions,
      name: routeName,
      description: routeDescription,
      subUnit,
      unit,
      division,
      messageOption,
      message,
      registration,
    };
    onConfirmRoute(route);
    localStorage.setItem(`route`, JSON.stringify(route));
    onValidRouteConfirm(AppRoute.ROOT);
  };

  return <Fragment>
    <div className="route-card__content-wrapper confirm">
      <div className="confirm__wrapper">
        <p className="confirm__section-title">Route info</p>
        {routeOptions && <p className="confirm__route-info">
          <span className="confirm__route-type">Type: </span>
          <span className="confirm__route-value">{routeOptions.label}</span>
        </p>}
        {routeName && <p className="confirm__route-info">
          <span className="confirm__route-type">Route name: </span>
          <span className="confirm__route-value">{routeName}</span>
        </p>}
        {routeDescription && <p className="confirm__route-info">
          <span className="confirm__route-type">Route description: </span>
          <span className="confirm__route-value">{routeDescription}</span>
        </p>}
      </div>
      <div className="confirm__wrapper">
        <p className="confirm__section-title">Agreement</p>
        {subUnit ? subUnit.value === `necessary` &&
    <Fragment>
      <div className="confirm__agreement-wrapper">
        <p className="confirm__text">Subdivision agreement:</p>
        <button className="confirm__select-button" type="button">
          <span className="visually-hidden">Add user</span>
          <svg width="20px" height="20px" viewBox="0 0 20 20" className="confirm__select-icon">
            <use xlinkHref="#add"></use>
          </svg>
        </button>
        <span>Select user</span>
      </div>
    </Fragment> : null}
        {unit ? unit.value === `necessary` &&
        <Fragment>
          <div className="confirm__agreement-wrapper">
            <p className="confirm__text">Unit agreement:</p>
            <ul className="confirm__agreement-list">
              {division && division.map((it, index) => {
                return <li key={`${index}-${it.value}`} className="confirm__agreement-item">
                  <p className="confirm__text">{`${it.label} agreement:`}</p>
                  <button className="confirm__select-button" type="button">
                    <span className="visually-hidden">Add user</span>
                    <svg width="20px" height="20px" viewBox="0 0 20 20" className="confirm__select-icon">
                      <use xlinkHref="#add"></use>
                    </svg>
                  </button>
                  <span>Select user</span>
                </li>;
              })}
            </ul>
          </div>
        </Fragment> : null
        }
      </div>
      <div className="confirm__wrapper">
        <p className="confirm__section-title">Recipient</p>
        <div className="confirm__recipient-wrapper">
          <p className="confirm__text">Recipient:</p>
          <button className="confirm__select-button" type="button">
            <span className="visually-hidden">Add recipient</span>
            <svg width="19px" height="20px" viewBox="0 0 19 20" className="confirm__select-icon">
              <use xlinkHref="#add"></use>
            </svg>
          </button>
          <span>Select recipient</span>
        </div>
      </div>
      {messageOption ? messageOption.value !== `none` &&
        <div className="confirm__wrapper">
          <p className="confirm__section-title">Notification</p>
          <p className="confirm__notice-info">
            <span className="confirm__notice-type">Send to: </span>
            <span className="confirm__notice-value">{messageOption.label}</span>
          </p>
          <p className="confirm__notice-info">
            <span className="confirm__notice-type">Message: </span>
            <span className="confirm__notice-value">{message}</span>
          </p>
        </div>
        : null
      }
      {registration ? registration.value !== `none` &&
      <div className="confirm__wrapper">
        <p className="confirm__section-title">Registration</p>
        <p className="confirm__registration-text">{`This document need ${registration.label.toLowerCase()}`}</p>
      </div>
        : null}
      <button type="button" className="route-card__next-button route-card__next-button--confirm" onClick={() => {
        onConfirmButtonClick();
      }}>
        Confirm
      </button>
    </div>
  </Fragment>;
};

ConfirmCard.propTypes = {
  routeName: PropTypes.string,
  routeDescription: PropTypes.string,
  routeOptions: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  subUnit: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  unit: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  division: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  messageOption: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  message: PropTypes.string,
  registration: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  onConfirmRoute: PropTypes.func.isRequired,
  onValidRouteConfirm: PropTypes.func.isRequired,
};

const mapDispathToProps = (dispatch) => ({
  onConfirmRoute(route) {
    dispatch(RouteCreator.createRoute(route));
  },
  onValidRouteConfirm(route) {
    dispatch(redirectToRoute(route));
  }
});

export default connect(null, mapDispathToProps)(ConfirmCard);
