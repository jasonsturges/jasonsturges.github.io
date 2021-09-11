import React from 'react';
import Divider from './Divider';
import Icon500px from './icons/500px';
import IconBehance from './icons/Behance';
import IconCodepen from './icons/Codepen';
import IconFacebook from './icons/Facebook';
import IconGithub from './icons/Github';
import IconInstagram from './icons/Instagram';
import IconLinkedIn from './icons/LinkedIn';
import IconPinterest from './icons/Pinterest';
import IconSoundCloud from './icons/SoundCloud';
import IconStackOverflow from './icons/StackOverflow';
import IconTwitter from './icons/Twitter';
import IconVimeo from './icons/Vimeo';
import IconVSCO from './icons/VSCO';
import IconYouTube from './icons/YouTube';
import './Footer.scss';

const Footer = () => (
  <footer className="site-footer">
    <div className="row center-xs">
      <Divider width={280} height={120} fill="#efefef" />
    </div>
    <div className="row center-xs">
      <div className="col-xs-6">
        <div className="box icons">
          <a href="https://www.facebook.com/jason.sturges.1"><IconFacebook width={16} /></a>
          <a href="https://www.linkedin.com/in/jasonsturges"><IconLinkedIn width={16} /></a>
          <a href="https://twitter.com/jasonsturges"><IconTwitter width={16} /></a>
          <a href="http://500px.com/jasonsturges"><Icon500px width={16} /></a>
          <a href="http://instagram.com/jasonsturges"><IconInstagram width={16} /></a>
          <a href="https://www.pinterest.com/jasonsturges/"><IconPinterest width={16} /></a>
          <a href="http://vsco.co/jasonsturges"><IconVSCO width={16} /></a>
          <a href="https://www.behance.net/jasonsturges"><IconBehance width={16} /></a>
          <a href="https://soundcloud.com/jasonsturges"><IconSoundCloud width={16} /></a>
          <a href="https://youtube.com/c/JasonSturges"><IconYouTube width={16} /></a>
          <a href="http://vimeo.com/jasonsturges"><IconVimeo width={16} /></a>
          <a href="https://codepen.io/jasonsturges/"><IconCodepen width={16} /></a>
          <a href="https://github.com/jasonsturges"><IconGithub width={16} /></a>
          <a href="https://stackoverflow.com/users/798448/jason-sturges"><IconStackOverflow width={16} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
