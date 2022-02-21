import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcontact } from "./js/actions/contactActions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcontact());
  }, []);

  const contacts = useSelector((state) => state.contactList);
  console.log(contacts);

  return (
    <div className="App">
      <div>
        {contacts ? (
          contacts.map((el) => (
            <div>
              <h1>{el?.name}</h1>
              <h3>{el?.email}</h3>
              <p>{el?.phone}</p>
            </div>
          ))
        ) : (
          <h3>loading...</h3>
        )}
      </div>
    </div>
  );
}

export default App;
