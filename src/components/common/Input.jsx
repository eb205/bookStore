import React from 'react';

const Input = (props) => {

    return (
        <div className="form-group">
            <label style={{display:"inline-block", marginRight:"5px"}}>{props.name}: </label>
            <input type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange} style={{display:"inline-block"}}/>
            {props.info&& <small class="text-muted">{props.info}</small>}
        </div>
    )
}

export default Input;