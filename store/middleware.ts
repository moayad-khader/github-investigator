const asyncDispatch = (store: any) => (next: any) => (action: any) => {
    let syncActivityFinished: boolean = false;
    let actionQueue: Array < String > = [];
  
    function flushQueue() {
      actionQueue.forEach((a) => store.dispatch(a)); 
      actionQueue = [];
    }
  
    function asyncDispatch(asyncAction: any) {
      actionQueue = actionQueue.concat([asyncAction]); 
      if (syncActivityFinished) {
        flushQueue();
      }
    }
  
    const actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch });
  
    next(actionWithAsyncDispatch);
    syncActivityFinished = true;
    flushQueue();
  };
  
export default asyncDispatch;