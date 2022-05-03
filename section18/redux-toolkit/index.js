import { Provider } from "react-redux";
import store from "./store/index";
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
