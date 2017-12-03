import React from 'react';
import { browserHistory } from 'react-router';
import Menu from 'material-ui/Menu';
import Button from 'material-ui/Button';
import MenuItem from 'material-ui/Menu/MenuItem';
import MoreVertIcon from 'material-ui-icons/MoreVert';

export default ({ onCreateUserClick, onSignoutClick }) => (
  <Menu
    iconButtonElement={
      <Button><MoreVertIcon color={'white'}/></Button>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="All Travelers" onClick={() => browserHistory.push('/admin/travelers')} />
    <MenuItem primaryText="Create New User" onClick={() => browserHistory.push('/admin/createuser')}/>
    <MenuItem primaryText="Update Profile" onClick={() => browserHistory.push('/admin/updateprofile')} />
    <MenuItem primaryText="Sign out" onClick={onSignoutClick}/>
  </Menu>
)
