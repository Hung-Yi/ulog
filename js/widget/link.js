/**
 *  @file       link.js
 *  @brief      The Link component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/23/2018 created.
 *  @date       04/23/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details 
 *
 *  The Link component of the Widget system.
 */
'use strict';

import HTML from '../html/html.js';

import node from './node.js';
import widget from './widget.js';

let Link = function (tag) {
  let el = node({
    tag: HTML.LI,
  });

  el.appendChild(
    node({
      tag: HTML.A,
      attribute: {
        'textContent': tag,
      }
    })
  );

  this.node = el;
};

Link.prototype = Object.create(widget);

Link.prototype.constructor = Link;

export default Link;

// widget/link.js
