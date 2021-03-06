import React, {Fragment, useState} from 'react';
import {TabNames, options, unitOptions, subOptions, messageOptions, regOptions} from '../../utils/const';
import Tab from '../tab/tab';
import Tabs from '../tabs/tabs';
import Select from 'react-select';
import ConfirmCard from '../confirm-card/confirm-card';


const RouteCard = () => {
  const [activeItem, setActiveItem] = useState(TabNames.CREATE);
  const [routeOptions, setRouteOptions] = useState(null);
  const [routeName, setRouteName] = useState(``);
  const [routeDescription, setRouteDescription] = useState(``);
  const [subUnit, setSubUnit] = useState(null);
  const [unit, setUnit] = useState(null);
  const [division, setDivision] = useState(null);
  const [messageOption, setMessageOption] = useState(null);
  const [message, setMessage] = useState(``);
  const [registration, setRegistration] = useState(null);

  const handleActiveItemChange = (title) => {
    setActiveItem(title);
  };

  return <Fragment>
    <section className="route-card">
      <Tabs activeItem={activeItem} onTabChange={handleActiveItemChange}>
        <Tab title={TabNames.CREATE}>
          <div className="route-card__content-wrapper">
            <p className="route-card__title">Create route</p>
            <Select
              value={routeOptions}
              options={options}
              className="select-container"
              classNamePrefix="select"
              onChange={(selectedOption) => {
                setRouteOptions(selectedOption);
              }}/>
            <label className="route-card__label" htmlFor="route-name">Route name</label>
            <input className="route-card__input" type="text" id="route-name" value={routeName} placeholder="Write route name" onChange={(evt) => {
              setRouteName(evt.target.value);
            }}/>
            <label className="route-card__label" htmlFor="route-description">Route description</label>
            <textarea className="route-card__textarea" id="route-description" value={routeDescription} placeholder="Write route description" onChange={(evt) => {
              setRouteDescription(evt.target.value);
            }}/>
            <button type="button" className="route-card__next-button" onClick={() => {
              handleActiveItemChange(TabNames.AGREEMENT);
            }}>
              Next
            </button>
          </div>
        </Tab>
        <Tab title={TabNames.AGREEMENT}>
          <div className="route-card__content-wrapper">
            <p className="route-card__title">Agreement</p>
            <div className="route-card__subdivision">
              <h5>Subdivision agreement</h5>
              <Select
                value={subUnit}
                options={subOptions}
                className="select-container"
                classNamePrefix="select"
                onChange={(selectedOption) => {
                  setSubUnit(selectedOption);
                }}/>
            </div>
            <div className="route-card__subdivision">
              <h5>Other unit</h5>
              <Select
                value={unit}
                options={subOptions}
                className="select-container"
                classNamePrefix="select"
                onChange={(selectedOption) => {
                  setUnit(selectedOption);
                }}/>
              <Select
                value={division}
                options={unitOptions}
                isMulti={true}
                isDisabled={!unit || unit.value === `unnecessary`}
                className="select-container"
                classNamePrefix="select"
                onChange={(selectedOption) => {
                  setDivision(selectedOption);
                }}/>
            </div>
            <button type="button" className="route-card__next-button" onClick={() => {
              handleActiveItemChange(TabNames.NOTIFICATION);
            }}>
              Next
            </button>
          </div>
        </Tab>
        <Tab title={TabNames.NOTIFICATION}>
          <div className="route-card__content-wrapper">
            <p className="route-card__title">Notification</p>
            <div className="route-card__notification">
              <Select
                value={messageOption}
                options={messageOptions}
                className="select-container"
                classNamePrefix="select"
                onChange={(selectedOption) => {
                  setMessageOption(selectedOption);
                }}/>
              <label className="route-card__label" htmlFor="route-message">Message</label>
              <textarea className="route-card__textarea" id="route-message" value={message} placeholder="Write message" onChange={(evt) => {
                setMessage(evt.target.value);
              }}/>
            </div>
            <button type="button" className="route-card__next-button" onClick={() => {
              handleActiveItemChange(TabNames.REGISTRATION);
            }}>
              Next
            </button>
          </div>
        </Tab>
        <Tab title={TabNames.REGISTRATION}>
          <div className="route-card__content-wrapper">
            <p className="route-card__title">Registtration</p>
            <Select
              value={registration}
              options={regOptions}
              className="select-container"
              classNamePrefix="select"
              onChange={(selectedOption) => {
                setRegistration(selectedOption);
              }}/>
            <button type="button" className="route-card__next-button" onClick={() => {
              setActiveItem(TabNames.CONFIRM);
            }}>
              Next
            </button>
          </div>
        </Tab>
        <Tab title={TabNames.CONFIRM}>
          <ConfirmCard
            routeOptions={routeOptions}
            routeName={routeName}
            routeDescription={routeDescription}
            subUnit={subUnit}
            unit={unit}
            division={division}
            messageOption={messageOption}
            message={message}
            registration={registration}
          />
        </Tab>
      </Tabs>
    </section>
  </Fragment>;
};

export default RouteCard;
