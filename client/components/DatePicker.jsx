import React, { Component } from 'react';
import { TextField } from 'redux-form-material-ui';

class DatePicker extends Component {
    render() {
        return (
            <div>
                <TextField
                    id="date"
                    label="What day do you arrive?"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        );
    }
}

export default DatePicker;