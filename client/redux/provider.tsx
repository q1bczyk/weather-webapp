'use client';

import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/stores/searchCityStore';

export default function Providers({ children }) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
