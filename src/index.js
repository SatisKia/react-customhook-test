import './index.css';
import { ModalProvider } from './hook/useModal';
import App from './App';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
