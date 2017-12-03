import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import ActionFlightTakeoff from 'material-ui-icons/FlightTakeoff';
import AppBarMenu from './AppBarMenu';

let style = {
  button: {
    "margin": "2em auto",
    "display": "block",
    "width": "50%"
  }
};

export default class AdminContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Toolbar style={{ backgroundColor: '#2d6ea8' }}>
          <ToolbarGroup firstChild={true}>
            <Button id="btn-all-travelers" onClick={() => browserHistory.push('/admin/travelers')}>
              <img src="/images/logos-png/BB_Logo_03-White.png" />
            </Button>
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            <Link to="/admin/travelers/add" >
              <Button raised backgroundColor="#FFFFFF" id="add-new-traveler">Add Traveler</Button>
            </Link>
            <AppBarMenu />
          </ToolbarGroup>
        </Toolbar>
        {this.props.children}
      </div>
    )
  }
}
