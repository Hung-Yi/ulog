/**
 *  @file       blog.js
 *  @brief      The Blog module of ULog.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/18/2018 created.
 *  @date       03/26/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Blog module of the ULog.
 */
'use strict';

import Container from '../container/container.js';
import Card from '../widget/card.js';
import Icon from '../widget/icon.js';
import TextArea from '../widget/textarea.js';

const banner = function () {
  let el = document.createElement('header');

  let title = document.createElement('h1');
  title.textContent = 'U Log';

  el.appendChild(title);
  el.style.background = '#00a0ffff';
  el.style.height = '4rem';

  return el;
};

const footer = function () {
  let el = document.createElement('footer');

  let copyright = document.createElement('p');
  copyright.textContent = '© 2018, Yiwei Chiao';
  copyright.style.margin = '0';

  el.appendChild(copyright);

  el.style.background = '#ff0000ff';
  el.style.height = '2rem';

  return el;
};

const content = () => {
  let card = new Card('blog');
  let textArea = new TextArea();
  let el = document.createElement('main');

  card.appendChild(textArea.node);

  el.appendChild(card.node);

  return el;
};

export default function () {
  let blog = new Container('div');
  let icon = new Icon('test');
  console.log(icon);

  return blog.setHeader(banner())
      .setFooter(footer())
      .setContent(content());
};

// blog.js
