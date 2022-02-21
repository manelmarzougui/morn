import { GET_CONTACT, GET_CONTACT_FAIL , GET_CONTACT_SUCCESS } from "../constant/contacttypes";


const initialState ={
    contactList:[],
    errors:null,
    status:"",

};
 const contactReducer=(state=initialState,{type,payload})=>{
switch (type) {
    case GET_CONTACT:
        return{...state,status:"request send"};
        case GET_CONTACT_SUCCESS:
            return{...state,status:"success",contactList:payload};
            case GET_CONTACT_FAIL:
                return{...state,status:"fail",errors:payload};
        

    default:
    return state;
}
}
export default contactReducer;
