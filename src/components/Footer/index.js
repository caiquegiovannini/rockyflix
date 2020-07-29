import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/caique-giovannini/" target="_blank">
        <img src="https://raw.githubusercontent.com/caiquegiovannini/imersao-css/master/img/titulo.png" alt="caique giovannini logo"/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/" target="_blank">
          Imersão React da Alura
        </a>
      </p>
      
      <ul>
        <li>
          <a href="https://github.com/caiquegiovannini" target="_blank">
            <img src="https://github.com/caiquegiovannini/weather-app/blob/master/images/contact_icons/github_white.png?raw=true" alt="github icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/caique-giovannini/" target="_blank">
            <img src="https://github.com/caiquegiovannini/weather-app/blob/master/images/contact_icons/linkedin.png?raw=true" alt="linkedin icon" />
          </a>
        </li>
      </ul>
    </FooterBase>
  );
}

export default Footer;
