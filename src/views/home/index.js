import React, { useEffect } from 'react';
// import {Link} from "react-router-dom";
import { Hire } from './Hire';
import Footer from '../../layouts/MainLayout/Footer';
import { Blog } from './Blog';
import { Partners } from './partners';
import { HIW } from './HIW';
import Nav from '../../layouts/MainLayout/Nav';
import { TopAssess } from './TopAssess';

export const HomeView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="hidden homeheader md:block">
        {/* <Nav /> */}
        <TopAssess />
        <Hire />
        <Partners />
        <HIW />
        <Blog />
        {/* <div class="bg-gdbas">
          <Footer />
        </div> */}
      </div>

      <div className="mobile-header md:hidden">
        <Nav />
        <TopAssess />
        <Hire />
        <Partners />
        <HIW />
        <Blog />
        {/* <div class="bg-gdbas">
          <Footer />
        </div> */}
      </div>
    </>
  );
};
