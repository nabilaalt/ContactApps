// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactApp from './components/ContactApp';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);