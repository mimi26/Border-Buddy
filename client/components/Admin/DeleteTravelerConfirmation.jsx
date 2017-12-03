import React from 'react';
import {Dialog, Button} from 'material-ui';

export default ({ confirmDelete, handleClose, open, traveler }) => {
  
  const actions = [
    <Button
      key={1}
      id="confirm-delete"
      raised
      onTouchTap={confirmDelete}
  		backgroundColor="#800000"
      labelColor="#FFFFFF"
      style={style.button}
      >Yes, delete this traveler</Button>,
    <Button
      key={2}
      id="cancel-delete"
      raised
      onTouchTap={handleClose}
      primary={true}
      style={style.button}
      >No, do not delete this traveler</Button>
  ];

  return (
    <div>
      <Dialog
        id="delete-traveler-confirmation"
        open={open}
        actions={actions}
        modal={true}
        title={'Are you sure you want to delete this traveler?'}>
        {
          <h2>{traveler.name}</h2>
        }
      </Dialog>
    </div>
  )
}

const style = {
  button: {
    width: '50%'
  }
}