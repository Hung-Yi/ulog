(function () {
'use strict';

/**
 *  @file       container.js
 *  @brief      The Container module of ULog.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/18/2018 created.
 *  @date       03/18/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Container module of the ULog.
 */

const container = function (el = 'div') {
  this.node = document.createElement(el);
  this.node.style.height = '100vh';
};

container.prototype = {
  setHeader: function (header) {
    this.node.insertBefore(header, this.node.firstChild);

    return this;
  },

  setContent: function (content) {
    this.node.insertBefore(content, this.node.querySelector('footer'));

    return this;
  },

  setFooter: function (footer) {
    this.node.appendChild(footer);

    return this;
  }
};

// container.js

/**
 *  @file       blog.js
 *  @brief      The Blog module of ULog.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/18/2018 created.
 *  @date       03/18/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Blog module of the ULog.
 */

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
  let el = document.createElement('main');

  el.style.height = 'calc(100vh - 6rem)';

  return el;
};

function Blog () {
  let blog = new container('div');

  return blog.setHeader(banner()).setFooter(footer()).setContent(content());
}
// blog.js

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

window.addEventListener('load', () => {
  let blog = Blog();

  document.getElementsByTagName('html')[0].style.height = '100vh';

  document.body.style.height = '100vh';
  document.body.style.margin = '0';

  document.body.appendChild(blog.node);
});

// index.js

}());
//# sourceMappingURL=ulog.js.map
