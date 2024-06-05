import { Home } from "./screens/Home";
import { StatusBar } from "expo-status-bar";

import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <>
        <Home />
        <StatusBar style="light" />
      </>
    </Provider>
  );
}
