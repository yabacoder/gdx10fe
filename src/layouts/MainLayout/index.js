import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

export const MainLayout = props => {
  return (
    <>
      <div className="subBg">
        <div class="" id="top-header">
          <Nav />
        </div>
        <div className="h-full mx-auto md:pt-24 md:mb-10 md:py-8">
          <Outlet />
        </div>
        <div class="bg-gdbas">
          <Footer />
        </div>
      </div>
    </>
  );
};

//export default MainLayout;
