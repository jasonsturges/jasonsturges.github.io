import React from 'react';
import { PageLayout } from '../layouts/PageLayout';
import Avatar from '../components/Avatar';
import { Roxik } from '../components/Roxik/Roxik';
import './Home.scss'

const Home = () => (
  <PageLayout className="home-page">

    <div className="cover">
      <p className="author">Jason Sturges</p>
      <p className="stack">
        <span>A</span>
        <span>v</span>
        <span>a</span>
        <span>n</span>
        <span>t</span>
        <span>-</span>
        <span>g</span>
        <span>a</span>
        <span>r</span>
        <span>d</span>
        <span>e</span>
      </p>
      <p className="tagline">Experimental artist</p>
    </div>


    <div className="grid">
      <Avatar />
      <p>Cutting edge creative professional leveraging new technology for immersive user experience. </p>
      <p>Agile in software development methodologies from both product and project based work, self-motivated approach
        enables seamless integration with clear focus of short term goals and roadmaps. Institutes consistently
        effective business solutions utilizing modern standards, solid design patterns, and best practices. </p>
    </div>

    <Roxik height="410" />

    <div className="grid">
      <p>Fluent cross-platform in multiple developer tool chains for web, mobile, and desktop apps as well as
        implementation within infrastructure tiers of enterprise systems. </p>
      <p>An aspiring team worker dedicated to meet challenges and contribute towards growth of the organization.
        Proactive operating independently or within team environments. Quick to learn and collaborate for efficient
        workflow.</p>
    </div>

  </PageLayout>
);

export default Home;
