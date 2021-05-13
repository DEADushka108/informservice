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

  return (<Fragment>
    <div className="chart">
      <div className="chart__edit">
        <button type="button" onClick={onModeChange}>
          {isEditMode ? <p className="chart__text chart__text--on">On</p> : <p className="chart__text chart__text--off">Off</p>}
        </button>
      </div>
      {isEditMode && <Fragment><div className="chart__user">
        {Array.from(selectedUser).map((user) => {
          return <article key={user.id} className="chart__user-info user-info">
            <img className="user-info__photo" src={user.photo} alt="User photo"/>
            <p className="user-info__name">
              {user.name}
            </p>
            <p className="user-info__title">
              {user.title}
            </p>
          </article>;
        })}
      </div>
      <div className="chart__edit-user">
        <h4 className="chart__edit-title">New data</h4>
        <input type="text" placeholder="name" value={newUserName} onChange={onNameChange} required/>
        <input type="text" placeholder="title" value={newUserTitle} onChange={onTitleChange} required/>
      </div>
      <div className="chart__edit-controls">
        <button type="button" disabled={!newUserName} onClick={updateUser}>
          Update user
        </button>
        <button type="button" className="chart__edit-button" disabled={!selectedUser} onClick={deleteUser}>
          Delete user
        </button>
        <div className="chart__new-user">
          <div className="chart__new-wrapper">
            <h4 className="chart__new-title">New employee</h4>
            <input type="text" placeholder="name" value={newUser[0].name} onChange={onNewUserNameChange} required/>
            <input type="text" placeholder="title" value={newUser[0].title} onChange={onNewUserTitleChange} required/>
          </div>
          <div className="chart__new-controls">
            <button type="button" className="chart__add-button" onClick={addNewUser}>
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
      pan={true}
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
