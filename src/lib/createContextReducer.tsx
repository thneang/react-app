// createContextReducer.tsx
import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from "react";

export function createContextReducer<State, Action>(
  reducer: (state: State, action: Action) => State,
  initialState: State
) {
  const StateContext = createContext<State | undefined>(undefined);
  const DispatchContext = createContext<Dispatch<Action> | undefined>(
    undefined
  );

  function Provider(children: ReactNode) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    );
  }

  function useStateContext() {
    const context = useContext(StateContext);
    if (context === undefined) {
      throw new Error("useStateContext must be used within its Provider");
    }
    return context;
  }

  function useDispatchContext() {
    const context = useContext(DispatchContext);
    if (context === undefined) {
      throw new Error("useDispatchContext must be used within its Provider");
    }
    return context;
  }

  return [Provider, useStateContext, useDispatchContext] as const;
}
