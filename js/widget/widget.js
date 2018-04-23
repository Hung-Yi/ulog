/**
 *  @file       widget.js
 *  @brief      The Widget component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/24/2018 created.
 *  @date       04/21/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Widget component of the Widget system.
 */
'use strict';

let widget = {
  appendChild: function (node) {
    let el = this.node;

    el.appendChild(node);

    return this;
  },

  addClass: function (cls) {
    if (!this.node.className.includes(cls)) {
      this.node.className += this.node.className ? ` ${cls}` : cls;
    } // fi

    return this;
  },

  removeClass: function (cls) {
    this.node.className = this.node.className.replace(
      RegExp(`[ ]*${cls}`, 'g'), ''
    );

    return this;
  },

  setAttribute: function (attribute, value) {
    this.node[attribute] = value;

    return this;
  },

  setBackgroundColor: function (color) {
    let el = this.node;

    el.style.backgroundColor = color;

    return this;
  },

  setForgroundColor: function (color) {
    let el = this.node;

    el.style.color = color;

    return this;
  },
};

export default widget;

// widget/widget.js
