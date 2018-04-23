/**
 *  @file       blog.js
 *  @brief      The Blog module of ULog.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/18/2018 created.
 *  @date       04/23/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Blog module of the ULog.
 */
'use strict';

import Container from '../container/container.js';

import HTML from '../html/html.js';

import Post from '../post/post.js';

import Card from '../widget/card.js';
import Link from '../widget/link.js';
import node from '../widget/node.js';

const controls = () => {
  let newPost = new Link('新  帖');

  let ul = node({
    tag: HTML.UL,
    className: 'nav-control'
  });

  ul.appendChild(newPost.node);

  let el = node({
    tag: HTML.SECTION,
  });

  el.appendChild(ul);

  return el;
}

const banner = () => {
  let el = document.createElement('header');

  let title = document.createElement('h1');
  title.textContent = 'U Log';

  el.appendChild(title);
  el.style.background = '#00a0ffff';
  el.style.height = '5rem';

  el.appendChild(controls());

  return el;
};

const content = () => {
  let card = new Card('blog');
  let post = new Post();
  let el = document.createElement('main');

  card.appendChild(post.node);

  el.appendChild(card.node);

  return el;
};

const footer = () => {
  let el = document.createElement('footer');

  let copyright = document.createElement('p');
  copyright.textContent = '© 2018, Yiwei Chiao';
  copyright.style.margin = '0';

  el.appendChild(copyright);

  el.style.background = '#ff0000ff';
  el.style.height = '2rem';

  return el;
};

export default function () {
  let blog = new Container('div');

  return blog.setHeader(banner())
      .setFooter(footer())
      .setContent(content());
};

// blog.js
