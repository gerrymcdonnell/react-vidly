import React from 'react';

// const Input = (props) => {
//     return ( 
//         <div className="form-group">
//             <label htmlFor={props.name}>{props.label}</label>
//             <input 
//                 value={props.value}
//                 onChange={props.onChange}
//                 name={props.name}
//                 autoFocus 
//                 id={props.name} 
//                 type="text" className="form-control" />
                
//                 {/* vid 121
//                 conditional rendering
//                 if error is truthy then return expression
//                 */}
//                 {props.error && <div className="alert alert-danger">{props.error}</div>}
//         </div>
//      );
// }

// object destructing version
const Input = ({type,name,label,value,onChange,error}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                value={value}
                onChange={onChange}
                name={name}
                autoFocus 
                id={name}                 
                type={type} 
                className="form-control" />
                
                {/* vid 121
                conditional rendering
                if error is truthy then return expression
                only want to render div if there is an error i.e error has a vlaue
                */}
                {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;