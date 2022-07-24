import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { NextPage } from 'next';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
