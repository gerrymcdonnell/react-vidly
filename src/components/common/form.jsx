import React, { Component } from 'react';
import Joi from 'joi-browser';

class Form extends Component {
    
    state = { 
        data:{},
        errors:{}
     }

    validate = () => {
        /**joi terminate validation as soon as first error occcurs i.e abortearly */
        const options={abortEarly:false};
        const {error}=Joi.validate(this.state.data,this.schema,options);        

        if(!error) return null;

        const errors = {};
        for(let item of error.details)
            errors[item.path[0]]=item.message;
        return errors;
    }


    validateProperty=({name,value})=>{
        const obj={[name]:value};
        const schema={[name]:this.schema[name]};
        const {error}=Joi.validate(obj,schema);

        return error?error.details[0].message: null;
    }

    handleSubmit = e => {
        //prevent default behaviour of form
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors });

        if (errors) return;

        this.doSubmit();
    }

    handleChange = ({currentTarget:input}) => {

        console.log('handle change');
        
        const errors={...this.state.errors};
        const errorMessage=this.validateProperty(input);

        if(errorMessage) errors[input.name]=errorMessage;
        else delete errors[input.name];       
        
        const data = { ...this.state.data };        
        data[input.name] = input.value;

        this.setState({ data ,errors});
    }


}
 
export default Form;