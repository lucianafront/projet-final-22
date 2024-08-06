// src/context/AppContext.tsx
import React, { createContext, useReducer, useContext } from 'react';
import { AppState } from '../types';

const initialState: AppState = {
  notes: [],
  filters: [],
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });


const appReducer = (state: AppState, action: any): AppState => {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
