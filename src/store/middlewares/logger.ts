export const loggerMiddleware =
  (store: any) => (next: any) => (action: any) => {
    console.group(action.type);
    console.log('Dispatching:', action);
    const result = next(action);
    console.log('Next state:', store.getState());
    console.groupEnd();
    return result;
  };
