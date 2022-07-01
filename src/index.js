/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

let init = null;

export default {
  config: (config) =>{
      init = config;
  },
  widgets: {
    myWidget: {
      new: () => {
        console.log('HI')
        return {
          render: () => {
            ReactDOM.render(<Button 
                increment={init.increment}
            />, document.querySelector(init.selector));
          },
          unmount(){
            ReactDOM.unmountComponentAtNode(document.querySelector(init.selector)); 
          },
        }
      }
    }
  }
}