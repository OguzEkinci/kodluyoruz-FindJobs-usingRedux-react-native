import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './Reducer';
import initialState from './Store';

const JobContainer = ({children}) => {
  //custom componentlerin arasına bir şey eklemek istiyorsan children kullanılır.
  const store = createStore(reducers, initialState);
  return <Provider store={store}>{children}</Provider>;
};
export default JobContainer;
