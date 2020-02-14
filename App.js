import * as React from "react";
import { createStore } from "redux";
import Home from "./src/components/Home";
import { Provider } from "react-redux";

const initialState = {
  content: "welcome",
  token: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "WELCOME":
      return { content: "welcome" };
    case "LOGIN":
      return { content: "login" };
    case "TASKS":
      //console.log("Token payload here", action.payload);
      return { content: "tasks", token: action.payload };
  }
  return state;
};
const store = createStore(reducer);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
export default App;
