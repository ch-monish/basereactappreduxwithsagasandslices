
import { all,call,fork,spawn } from "redux-saga/effects";
import { watchercounter} from "../features/Counter/counterSaga";
import { watcherquote} from "../features/Quotes/quoteSaga";


function* helloSaga() {
  yield console.log("sagas started");
  yield "Hello Sagas";
}

export function* rootSaga() {

  const sagas=[
    helloSaga,
    watchercounter,
    watcherquote
  ]

  // yield all([helloSaga(), watchercounter(),watcherquote()]);
  yield all(sagas.map(saga=>
    
    spawn(function*(){
      while(true){
        try{
          yield call(saga)
          break
        }
        catch(e){
          console.log(e)
          console.log("sagas restarting")
        }
      }
    })
    
    
    
    ))
  // yield fork(helloSaga)
  // yield fork(watcherquote)
  // yield fork(watchercounter)
}
