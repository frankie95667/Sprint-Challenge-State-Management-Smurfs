import React from 'react';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addSmurf } from '../actions/smurfActions';

export default function SmurfForm(){
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(addSmurf(data));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input ref={register} name="name" />
            <label>Age</label>
            <input ref={register} name="age" />
            <label>Height</label>
            <input ref={register} name="height" />
            <button type="submit">Submit</button>
        </form>
    )
}
