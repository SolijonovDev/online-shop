import { useContext, createContext } from 'react';
import { useMethods } from 'react-use';

const PayMonthlyContext = createContext(null);

// const initialData={
//   isOpen:false,
//   title:""
// }

const initialState = {
  count: 0,
};

function createMethods(state) {
  return {
    reset() {
      return initialState;
    },
    increment() {
      return { ...state, count: state.count + 1 };
    },
    decrement() {
      return { ...state, count: state.count - 1 };
    },
  };
}

export const PayMonthlyProvider = props => {
  const [state, methods] = useMethods(createMethods, initialState);
  const { children } = props;
  return <PayMonthlyContext.Provider>{children}</PayMonthlyContext.Provider>;
};

export const usePayMonthly = () => useContext(PayMonthlyContext);
