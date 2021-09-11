import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./PageLayout.scss";

export const PageLayout = (props) => {
  return (
    <div className={props.className}>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
