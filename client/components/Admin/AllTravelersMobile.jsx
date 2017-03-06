import React, { Component} from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

const AllTravelersMobile = ({ travelers }) => {
  return (
    <div>
      { 
        travelers.map((traveler, i) => {
          const { id, name, phone, email, nationality, status: travelerStatus } = traveler;
          const { airlineCode, flightNum, arrivalTime, status: flightStatus } = traveler.flight;
          const timeString = (new Date(arrivalTime)).toLocaleString();
          return (
            <div key={i} style={{ margin: '2em'}}>
              <Card>
                <CardTitle title={`${name}`} subtitle={`Traveler ID: ${id}`} />
                  <div className="field-container col-6 sm-col sm-col-6">
                    <CardTitle title="Traveler Information" />
                    <CardText>{`Phone: ${phone}`}</CardText>
                    <CardText>{`Email: ${email}`}</CardText>
                    <CardText>{`Nationality: ${nationality}`}</CardText>
                    <CardText>{`Traveler Status: ${travelerStatus}`}</CardText>
                  </div>
                  <CardTitle title="Flight Information" />
                  <div className="field-container col-6 sm-col sm-col-6">
                    <CardText>{`Airline Code: ${airlineCode}`}</CardText>
                    <CardText>{`Flight #: ${flightNum}`}</CardText>
                    <CardText>{`ArrivalTime: ${timeString}`}</CardText>
                    <CardText>{`Flight Status: ${flightStatus}`}</CardText>
                  </div>
                <CardActions>
                  <RaisedButton 
                    label="View/Edit Traveler"
                    primary={true}
                    onTouchTap={() => browserHistory.push(`/admin/travelers/${traveler.id}`)}
                  />
                </CardActions>
              </Card>
            </div>
          )
        })
      }
    </div>
  )
}

export default AllTravelersMobile;