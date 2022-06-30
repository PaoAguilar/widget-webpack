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
        return {
          render: () => {
            ReactDOM.render(<Button 
                headerTitle={init.headerTitle}
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