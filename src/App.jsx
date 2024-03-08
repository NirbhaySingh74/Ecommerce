import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import { Provider } from "react-redux"; // Import Provider
import store from "./utils/store";
function App() {
  return (
    <Provider store={store}>
      <Header />
      {/* <Body searchInput={searchInput} /> */}
      <Outlet />
    </Provider>
  );
}

export default App;
