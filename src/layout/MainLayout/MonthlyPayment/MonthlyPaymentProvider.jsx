import { useContext, createContext } from 'react';
import { useMethods } from 'react-use';

import { MonthlyPayment } from '@/layout/MainLayout/MonthlyPayment/MonthlyPayment';

const MonthlyPaymentContext = createContext(null);

const initialState = {
  isOpen: false,
};

function createMethods(state) {
  return {
    openMonthlyPaymentPopup(id, title, price) {
      return { ...state, isOpen: true };
    },

    closeMonthlyPaymentPopup() {
      return initialState;
    },
  };
}

export const MonthlyPaymentProvider = props => {
  const [{ isOpen }, methods] = useMethods(createMethods, initialState);
  const { children } = props;

  const handleClose = () => {
    methods.closeMonthlyPaymentPopup();
  };

  return (
    <MonthlyPaymentContext.Provider value={methods}>
      {children}
      <MonthlyPayment isOpen={isOpen} handleClose={handleClose} />
    </MonthlyPaymentContext.Provider>
  );
};

export const useMonthlyPayment = () => useContext(MonthlyPaymentContext);
