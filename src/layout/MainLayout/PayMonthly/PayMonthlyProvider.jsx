import { useContext, createContext } from 'react';
import { useMethods } from 'react-use';

import { PayMonthly } from '@/layout/MainLayout/PayMonthly/PayMonthly';

const PayMonthlyContext = createContext(null);

const initialState = {
  isOpen: false,
};

function createMethods(state) {
  return {
    openPayMonthlyPopup(props) {
      return { ...state, isOpen: true };
    },

    closePayMonthlyPopup() {
      return initialState;
    },
  };
}

export const PayMonthlyProvider = props => {
  const [{ isOpen }, methods] = useMethods(createMethods, initialState);
  const { children } = props;

  return (
    <PayMonthlyContext.Provider value={methods}>
      {children}
      <PayMonthly isOpen={isOpen} />
    </PayMonthlyContext.Provider>
  );
};

export const usePayMonthly = () => useContext(PayMonthlyContext);
