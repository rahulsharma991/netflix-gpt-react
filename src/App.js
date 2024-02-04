import Body from "./components/Body";
import { ToastContainer } from 'react-toastify';
import {Provider} from 'react-redux';
import appStore from './utils/redux-store/appStore';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Provider store={appStore}>
    <Body />
    <ToastContainer />
    </Provider>
  );
}

export default App;
