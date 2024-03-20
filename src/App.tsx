import { Provider } from "react-redux";
import TodoList from "./components/TodoList/TodoList";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
