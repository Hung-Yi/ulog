(function () {
'use strict';

/**
 *  @file       container.js
 *  @brief      The Container module of ULog.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/18/2018 created.
 *  @date       03/25/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Container module of the ULog.
 */

var container = function container() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';

  this.node = document.createElement(el);
  this.node.style.height = '100vh';
};

container.prototype = {
  setHeader: function setHeader(header) {
    this.node.insertBefore(header, this.node.firstChild);

    return this;
  },

  setContent: function setContent(content) {
    this.node.insertBefore(content, this.node.lastChild);

    return this;
  },

  setFooter: function setFooter(footer) {
    this.node.appendChild(footer);

    return this;
  }
};

// container.js

/**
 *  @file       html.js
 *  @brief      The HTML module of the HTML subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/25/2018 created.
 *  @date       03/26/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The HTML module of the HTML subsystem.
 */

var TAG = {
  ANCHOR: 'a',
  ARTICLE: 'article',
  ASIDE: 'aside',
  BODY: 'body',
  BUTTON: 'button',
  DATA_LIST: 'datalist',
  DIVISION: 'div',
  FIGURE: 'figure',
  FOOTER: 'footer',
  HEADER: 'header',
  I: 'i',
  IMG: 'img',
  INPUT_FIELD: 'input',
  LABEL: 'label',
  LIST_ITEM: 'li',
  NAVIGATION: 'nav',
  ORDERED_LIST: 'ol',
  OPTION: 'option',
  PARAGRAPH: 'p',
  PRE_FORMATED: 'pre',
  SECTION: 'section',
  SELECT: 'select',
  SPAN: 'span',
  TABLE: 'table',
  TABLE_BODY: 'tbody',
  TABLE_CELL: 'td',
  TEXTAREA: 'textarea',
  TH: 'th',
  TABLE_HEAD: 'thead',
  TABLE_ROW: 'tr',
  UNORDERED_LIST: 'ul'
};

// html/html.js

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/**
 *  @file       node.js
 *  @brief      The Node module of the Widget subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/25/2018 created.
 *  @date       04/02/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Node module of the Widget subsystem.
 */

var node = function node(_ref) {
  var tag = _ref.tag,
      className = _ref.className,
      attribute = _ref.attribute,
      handler = _ref.handler;

  var el = document.createElement(tag);

  if (className) {
    el.className = className;
  } // fi

  if (attribute) {
    Object.entries(attribute).forEach(function (_ref2) {
      var _ref3 = slicedToArray(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];

      el[key] = value;
    });
  } // fi

  if (handler) {
    Object.entries(handler).forEach(function (_ref4) {
      var _ref5 = slicedToArray(_ref4, 2),
          e = _ref5[0],
          fn = _ref5[1];

      el.addEventListener(e, fn);
    });
  }

  return el;
};

/**
 *  @file       widget.js
 *  @brief      The Widget component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/24/2018 created.
 *  @date       03/24/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Widget component of the Widget system.
 */

var widget = {
  appendChild: function appendChild(node) {
    var el = this.node;

    el.appendChild(node);

    return this;
  },

  setBackgroundColor: function setBackgroundColor(color) {
    var el = this.node;

    el.style.backgroundColor = color;

    return this;
  },

  setForgroundColor: function setForgroundColor(color) {
    var el = this.node;

    el.style.color = color;

    return this;
  }
};

// widget/widget.js

/**
 *  @file       card.js
 *  @brief      The Card component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/24/2018 created.
 *  @date       04/02/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Card component of the Widget system.
 */

var Card = function Card(tag) {
  this.node = node({
    tag: TAG.SECTION,
    className: 'card'
  });
};

Card.prototype = Object.create(widget);

Card.prototype.constructor = Card;

Card.prototype.setHeader = function (header) {
  if (this.header) {
    this.node.replaceChild(header.node, this.header.node);
  } else {
    this.node.insertBefore(header.node, this.node.firstChild);
  }

  this.header = header;

  return this;
};

Card.prototype.setContent = function (content) {
  if (this.content) {
    this.node.replaceChild(content.node, this.content.node);
  } else {
    this.node.insertBefore(content.node, this.node.lastChild);
  }

  this.content = content;

  return this;
};

Card.prototype.setFooter = function (footer) {
  if (this.footer) {
    this.node.replaceChild(footer.node, this.footer.node);
  } else {
    this.node.appendChild(footer.node);
  }

  this.footer = footer;

  return this;
};

// widget/card.js

/**
 *  @file       icon.js
 *  @brief      The Icon component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/02/2018 created.
 *  @date       04/02/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Icon component of the Widget system.
 */

var Icon = function Icon(tag, handler) {
  var el = node({
    tag: TAG.SPAN,
    handler: handler
  });

  el.appendChild(node({
    tag: TAG.I,
    className: 'fas fa-' + tag + ' fa-3x'
  }));

  this.node = el;
};

Icon.prototype = Object.create(widget);

Icon.prototype.constructor = Icon;

// widget/icon.js

/**
 *  @file       textarea.js
 *  @brief      The TextArea component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/26/2018 created.
 *  @date       04/02/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The TextArea component of the Widget system.
 */

var TextArea = function TextArea(tag) {
  this.node = node({
    tag: TAG.TEXTAREA,
    attribute: {
      rows: 25
    }
  });
};

TextArea.prototype = Object.create(widget);

TextArea.prototype.constructor = TextArea;

// widget/textarea.js

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

var banner = function banner() {
  var el = document.createElement('header');

  var title = document.createElement('h1');
  title.textContent = 'U Log';

  el.appendChild(title);
  el.style.background = '#00a0ffff';
  el.style.height = '4rem';

  return el;
};

var footer = function footer() {
  var el = document.createElement('footer');

  var copyright = document.createElement('p');
  copyright.textContent = '© 2018, Yiwei Chiao';
  copyright.style.margin = '0';

  el.appendChild(copyright);

  el.style.background = '#ff0000ff';
  el.style.height = '2rem';

  return el;
};

var content = function content() {
  var card = new Card('blog');
  var textArea = new TextArea();
  var el = document.createElement('main');

  card.appendChild(textArea.node);

  el.appendChild(card.node);

  return el;
};

function Blog () {
  var blog = new container('div');
  var icon = new Icon('test');
  console.log(icon);

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

window.addEventListener('load', function () {
  var blog = Blog();

  document.getElementsByTagName('html')[0].style.height = '100vh';

  document.body.style.height = '100vh';
  document.body.style.margin = '0';

  ['file', 'edit', 'font', 'bold'].forEach(function (tag) {
    document.body.appendChild(new Icon(tag).node);
  });

  document.body.appendChild(blog.node);
});

// index.js

}());
//# sourceMappingURL=ulog.js.map
