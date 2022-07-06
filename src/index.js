/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import ReactDOM from 'react-dom';
import Button, { counterSlice, decrement } from './components/Button';

let init = null;

//---------------------------------------------------

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

//---------------------------------------------------




export default {
  config: (config) => {
    init = config;
  },
  widgets: {
    myWidget: {
      new: () => {
        return {
          render: () => {
            ReactDOM.render(
              <Provider store={store}>
                <Button />
              </Provider>
              , document.querySelector(init.selector));
          },
          showLocationHistory: (event) => {
            store.dispatch(decrement());
            console.log('event', event);
          },
          unmount() {
            ReactDOM.unmountComponentAtNode(document.querySelector(init.selector));
          },
        }
      }
    }
  }
}


/**
 * Reducer
 *  - Config -> default -> realtime
 *    - History
 *    - RealTime
 *  - RealTime
 *    - shoperId
 *    - orderId
 *  - History
 *    - orderId
 *  - Orders -> htttps api -> Componentes pricipales
 *  - Drivers -> https api
 */

/**
 * Acceso a reduce -> state application state / widget state
 * <WidgetApp>
 * </WidgetApp>
 */

/**
 * const widgetApp = (props)=>{
 *  const config = useSelect((state)=> state.config);
 *  if(config.type === 'order-history') return <OrderHistoryMap/>
 *  if(config.type === 'realtime') return <RealtTimeMap/>
 *  return <div> No type config found </dic>
 * }
 */

/**
 * const Realtime = ( props) =>{
 * 
 *  useEffect(()=> { dispatch(getRealtime())},[]);
 * 
 *  const driver = useSelect((state)=> state.realtime.drivers());
 * 
 *  return <map> --> logic -> punteros -> click cierta informacion -> ordenes tiene + la bateria
 * }
 */