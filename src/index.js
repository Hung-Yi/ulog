/**
 *  @file       index.js
 *  @brief      The entry point of ULog.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/12/2018 created.
 *  @date       03/18/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The entry point of ULog.
 */
'use strict';

import Blog from './blog/blog.js';
import Icon from './widget/icon.js';

window.addEventListener('load', () => {
  let blog = Blog();

  document.getElementsByTagName('html')[0].style.height = '100vh';

  document.body.style.height = '100vh';
  document.body.style.margin = '0';

  [ 'file', 'edit', 'font',  'bold' ].forEach(tag => {
    document.body.appendChild(new Icon(tag).node);
  });

  document.body.appendChild(blog.node);
});

// index.js
