import { Provider } from "react-redux";
import TodoList from "./components/TodoList/TodoList";
import store, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TodoList />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
