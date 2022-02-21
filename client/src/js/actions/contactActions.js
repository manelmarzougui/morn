import {
  GET_CONTACT,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
} from "../constant/contacttypes";
import axios from "axios";

export const getcontact = () => async (dispatch) => {
  dispatch({ type: GET_CONTACT });
  try {
    let result = await axios.get("/contact/");
    console.log(result);
    dispatch({ type: GET_CONTACT_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error.data });
  }
};
