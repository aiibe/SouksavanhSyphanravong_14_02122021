import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { debounce } from "debounce";

import { Provider } from "react-redux";
import store from "./store";
import { setItems } from "./utils/storage";

// Synchronize localStorage with Redux store
store.subscribe(
  debounce(() => {
    const { employees } = store.getState();
    setItems("employees", employees);
  }, 800)
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
