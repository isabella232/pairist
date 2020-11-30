import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { ModalProvider } from './hooks/useModal';
import { NotificationProvider } from './hooks/useNotification';
import './index.scss';

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <NotificationProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </NotificationProvider>
  </BrowserRouter>,
  root
);
