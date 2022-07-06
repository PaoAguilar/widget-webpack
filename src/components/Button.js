import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions


const Button = () => {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ background: 'red', width: '40%' }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <div>{count}</div>
      </div>
    </div>
  );
};

export default Button;