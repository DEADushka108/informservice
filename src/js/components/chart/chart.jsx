import React, {Fragment, useRef, useState} from 'react';
import {userDetails} from '../../types/user';
import OrganizationChart from '@dabeng/react-orgchart';
import ChartNode from '../chart-node/chart-node';
import JSONDigger from 'json-digger';
import {v4 as uuidv4} from 'uuid';

const Chart = (props) => {
  const {users} = props;
  const orgchart = useRef();
  const [usersList, setUsersList] = useState(users);
  const usersDigger = new JSONDigger(usersList, `id`, `children`);
  const [selectedUser, setSelectedUser] = useState(``);
  const [newUserName, setNewUserName] = useState(``);
  const [newUserTitle, setNewUserTitle] = useState(``);
  const [newUser, setNewUser] = useState([{name: ``, title: ``}]);
  const [isEditMode, setIsEditMode] = useState(true);
  const [isUpdate, setIsUpdate] = useState(true);

  const readSelectedUser = (userData) => {
    setSelectedUser(new Set([userData]));
    setNewUserName(userData.name);
    setNewUserTitle(userData.title);
  };

  const clearSelectedUser = () => {
    setSelectedUser(``);
    setNewUserName(``);
    setNewUserTitle(``);
  };

  const onNameChange = (evt) => {
    setNewUserName(evt.target.value);
  };

  const onNewUserNameChange = (evt) => {
    newUser[0].name = evt.target.value;
    setNewUser([...newUser]);
  };

  const onTitleChange = (evt) => {
    setNewUserTitle(evt.target.value);
  };

  const onNewUserTitleChange = (evt) => {
    newUser[0].title = evt.target.value;
    setNewUser([...newUser]);
  };

  const updateUser = async () => {
    await usersDigger.updateNodes([...selectedUser].map((user) => user.id), {id: uuidv4(), name: newUserName, title: newUserTitle, photo: `https://i.pravatar.cc/70`});
    setUsersList({...usersDigger.ds});
  };

  const getNewUser = () => {
    const newUsers = [];
    for (const user of newUser) {
      newUsers.push({...user, id: uuidv4(), photo: `https://i.pravatar.cc/70`});
    }
    return newUsers;
  };

  const addNewUser = async () => {
    await usersDigger.addChildren([...selectedUser][0].id, getNewUser());
    setUsersList({...usersDigger.ds});
    setNewUser([{name: ``, title: ``}]);
  };

  const deleteUser = async () => {
    await usersDigger.removeNodes([...selectedUser].map((user) => user.id));
    setUsersList({...usersDigger.ds});
    clearSelectedUser();
  };

  const onModeChange = () => {
    setIsEditMode(!isEditMode);
    if (isEditMode) {
      orgchart.current.expandAllNodes();
    }
    if (!isEditMode) {
      clearSelectedUser();
    }
  };

  const onUpdateModeChange = () => {
    setIsUpdate(!isUpdate);
  };

  return (<Fragment>
    <div className="chart">
      <div className="chart__edit">
        <p className="chart__edit-toggle">Edit mode: </p>
        <button type="button" className={`chart__edit-button ${isEditMode ? `chart__edit-button--on` : `chart__edit-button--off`}`} onClick={onModeChange}>
          {isEditMode ? `On` : `Off`}
        </button>
      </div>
      {isEditMode && <Fragment>
        <div className="chart__wrapper">
          <div className="chart__user-details">
            {!selectedUser ? <article className="chart__user-info user-info">
              <img className="user-info__photo" width="70px" height="70px" src="./img/content/no-user.png" alt="User photo"/>
              <p className="user-info__name"> Name: default</p>
              <p className="user-info__title">Title: default</p>
            </article>
              :
              Array.from(selectedUser).map((user) => {
                return <article key={user.id} className="chart__user-info user-info">
                  <img className="user-info__photo" width="70px" height="70px" src={user.photo} alt="User photo"/>
                  <p className="user-info__name"> Name: {user.name}</p>
                  <p className="user-info__title">Title: {user.title}</p>
                </article>;
              })
            }
            <button className="chart__update-mode" type="button" onClick={onUpdateModeChange}>
              <span className="visually-hidden">Update mode</span>
              <svg width="19" height="20" viewBox="0 0 19 20" className="chart__update-icon">
                <use xlinkHref="#add"></use>
              </svg>
            </button>
          </div>
          {isUpdate && <div className="chart__edit-user">
            <h4 className="chart__edit-title">Update info</h4>
            <div className="chart__edit-wrapper">
              <p className="chart__edit-item">
                <label className="chart__edit-label" htmlFor="name">Name</label>
                <input className="chart__edit-input" type="text" id="name" placeholder="name" value={newUserName} onChange={onNameChange} required/>
              </p>
              <p className="chart__edit-item">
                <label className="chart__edit-label" htmlFor="title">Title</label>
                <input className="chart__edit-input" type="text" id="title" placeholder="title" value={newUserTitle} onChange={onTitleChange} required/>
              </p>
            </div>
            <div className="chart__edit-controls">
              <button type="button" className="chart__update-button" disabled={!selectedUser} onClick={updateUser}>
                Update user
              </button>
              <button type="button" className="chart__delete-button" disabled={!selectedUser} onClick={deleteUser}>
                Delete user
              </button>
            </div>
          </div>
          }
          <div className="chart__new-user">
            <h4 className="chart__new-title">New employee</h4>
            <div className="chart__new-wrapper">
              <p className="chart__new-item">
                <label className="chart__new-label" htmlFor="new-name">Name:</label>
                <input className="chart__new-input" id="new-name" type="text" placeholder="name" value={newUser[0].name} onChange={onNewUserNameChange} required/>
              </p>
              <p className="chart__new-item">
                <label className="chart__new-label" htmlFor="new-title">Title:</label>
                <input className="chart__new-input" id="new-title" type="text" placeholder="title" value={newUser[0].title} onChange={onNewUserTitleChange} required/>
              </p>
            </div>
            <div className="chart__new-controls">
              <button type="button" className="chart__add-button" disabled={!selectedUser} onClick={addNewUser}>
                  Add employee
              </button>
            </div>
          </div>
        </div>
      </Fragment>
      }
    </div>
    <OrganizationChart
      ref={orgchart}
      datasource={usersList}
      draggable={isEditMode}
      collapsible={isEditMode}
      pan={isEditMode}
      chartClass="chart"
      NodeTemplate={ChartNode}
      onClickNode={readSelectedUser}
      onClickChart={clearSelectedUser}
    />;
  </Fragment>
  );
};

Chart.propTypes = {
  users: userDetails,
};

export default Chart;
