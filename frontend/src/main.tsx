import {createRoot} from "react-dom/client";
import {Provider} from 'react-redux';
import store from "@/store/store.ts";
import App from './App.tsx'
import './main.global.css'

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);