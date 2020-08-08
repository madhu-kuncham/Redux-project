import { BUY_ICECREAM } from './iceCreamTypes'

const initialstate = {
    numOfIceCreams: 20
}

const iceCreamreducer = (state , action) => {
    switch(action.type){
       case BUY_ICECREAM: return {
           ...state ,
           numOfIceCreams: state.numOfIceCreams -1
       } 
       default : return state
    }
}

export default iceCreamreducer