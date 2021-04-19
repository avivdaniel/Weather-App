import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';
import DaysCardList from '@/components/DaysCardList';
import SearchBar from '@/components/SearchBar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const {errors} = useSelector(state => state);

  useEffect(()=> {
      if (!errors) return;
      toast.error(errors, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }, [errors]);

  return (
    <div className="min-h-screen flex flex-col">
      <SearchBar />
      <DaysCardList/>
      <ToastContainer
      />
    </div>
  );
};

export default Home;
