import React from 'react'

const Input = (props) => (
    <div className="form-group">
        <label htmlFor={props.name}>
                {props.label + (props.required ? ' *' : '')}
        </label>
        <input
            className="form-control"
            id={props.name}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            {...props}
        />
    </div>
);

const Textarea = (props) => (
    <div className="form-group">
    <label>{props.label}</label>
    <textarea
      className="form-control"
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      {...props}
    />
  </div>
);

export {Input, Textarea}