import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import Navigation from '@/components/Navigation.jsx';

import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  const { errors } = useSelector((state) => state);

  useEffect(() => {
    if (!errors) return;
    toast.error(errors, {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, [errors]);

  return (
    <>
      <Navigation />
      <div>{children}</div>
      <ToastContainer />
    </>
  );
};

export default Layout;
