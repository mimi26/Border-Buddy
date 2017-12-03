import React from 'react';
import TextField from 'material-ui/TextField';

export default ({ input, style, underlineFocusStyle, errorStyle, type, meta: { asyncValidating, touched, error }}) => (
    <div className={asyncValidating ? 'async-validating' : ''}>
      <TextField
        {...input}
        type={type}
        style={style}
        errorText={touched && error && `${error}`} />
    </div>
);