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
   *  @date       04/23/2018 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2018 Yiwei Chiao
   *  @details
   *
   *  The HTML module of the HTML subsystem.
   */

  var TAG = {
    A: 'a',
    ARTICLE: 'article',
    ASIDE: 'aside',
    BODY: 'body',
    BUTTON: 'button',
    DATALIST: 'datalist',
    DIV: 'div',
    FIGURE: 'figure',
    FOOTER: 'footer',
    FORM: 'form',
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    HEADER: 'header',
    I: 'i',
    IMG: 'img',
    INPUT: 'input',
    LABEL: 'label',
    LI: 'li',
    NAV: 'nav',
    OL: 'ol',
    OPTION: 'option',
    P: 'p',
    PRE: 'pre',
    SECTION: 'section',
    SELECT: 'select',
    SPAN: 'span',
    TABLE: 'table',
    TBODY: 'tbody',
    TD: 'td',
    TEXTAREA: 'textarea',
    TH: 'th',
    THEAD: 'thead',
    TR: 'tr',
    UL: 'ul'
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
   *  @date       04/21/2018 last modified.
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

    addClass: function addClass(cls) {
      if (!this.node.className.includes(cls)) {
        this.node.className += this.node.className ? ' ' + cls : cls;
      } // fi

      return this;
    },

    removeClass: function removeClass(cls) {
      this.node.className = this.node.className.replace(RegExp('[ ]*' + cls, 'g'), '');

      return this;
    },

    setAttribute: function setAttribute(attribute, value) {
      this.node[attribute] = value;

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
   *  @file       article.js
   *  @brief      The Article component of the Widget system.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       04/07/2018 created.
   *  @date       04/07/2018 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2018 Yiwei Chiao
   *  @details
   *
   *  The Article component of the Widget system.
   */

  var Article = function Article(tag) {
    this.node = node({
      tag: TAG.ARTICLE,
      attribute: {
        contentEditable: true
      }
    });
  };

  Article.prototype = Object.create(widget);

  Article.prototype.constructor = Article;

  // widget/article.js

  /**
   *  @file       icon.js
   *  @brief      The Icon component of the Widget system.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       04/02/2018 created.
   *  @date       04/07/2018 last modified.
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
      handler: handler,
      className: 'icon'
    });

    el.appendChild(node({
      tag: TAG.I,
      className: 'fas fa-' + tag
    }));

    this.node = el;
  };

  Icon.prototype = Object.create(widget);

  Icon.prototype.constructor = Icon;

  // widget/icon.js

  /**
   *  @file       http.js
   *  @brief      The http module.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       04/16/2018 created.
   *  @date       04/16/2018 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2018 Yiwei Chiao
   *  @details 
   *
   *  The http module.
   */

  // http.js

  /**
   *  @file       post.js
   *  @brief      The Post component of the system.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       04/07/2018 created.
   *  @date       04/20/2018 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2018 Yiwei Chiao
   *  @details
   *
   *  The Post component of the system.
   */

  var toolBar = function toolBar() {
    var el = node({
      tag: TAG.DIV
    });

    [{
      tag: 'edit',
      cmd: ''
    }, {
      tag: 'undo',
      cmd: 'undo'
    }, {
      tag: 'redo',
      cmd: 'redo'
    }, {
      tag: 'copy',
      cmd: 'copy'
    }, {
      tag: 'cut',
      cmd: 'cut'
    }, {
      tag: 'paste',
      cmd: 'paste'
    }, {
      tag: 'bold',
      cmd: 'bold'
    }, {
      tag: 'italic',
      cmd: 'italic'
    }, {
      tag: 'underline',
      cmd: 'underline'
    }, {
      tag: 'align-left',
      cmd: 'justifyLeft'
    }, {
      tag: 'align-center',
      cmd: 'justifyCenter'
    }, {
      tag: 'align-right',
      cmd: 'justifyRight'
    }, {
      tag: 'list-ol',
      cmd: 'insertOrderedList'
    }, {
      tag: 'list-ul',
      cmd: 'insertUnorderedList'
    }, {
      tag: 'indent',
      cmd: 'indent'
    }, {
      tag: 'outdent',
      cmd: 'outdent'
    }, {
      tag: 'link',
      cmd: '',
      value: ''
    }].forEach(function (ctrl) {
      var icon = new Icon(ctrl.tag, {
        'mousedown': function mousedown(e) {
          e.preventDefault();
        },
        'click': function click(e) {
          document.execCommand(ctrl.cmd, false, ctrl.value);
        }
      });

      icon.addClass('edit-tool');

      el.appendChild(icon.node);
    });

    el.className = 'toolBar';

    return el;
  };

  var titleBar = function titleBar() {
    var el = node({
      tag: TAG.DIV,
      className: 'post-title'
    });

    var title = node({
      tag: TAG.H3,
      attribute: {
        'contentEditable': 'true'
      }
    });

    title.innerHTML = '標題：未定';

    el.appendChild(title);

    return el;
  };

  var Post = function Post(tag) {
    var article = new Article();
    article.addClass('edit-area').setAttribute('contentEditable', true);

    this.node = node({
      tag: TAG.FORM,
      attribute: {
        'method': 'post',
        'action': 'post.php'
      },
      handler: {
        "submit": function submit(e) {
          e.preventDefault();

          var formData = new FormData();

          formData.append('content', article.node.innerHTML);

          fetch('post', {
            method: 'POST',
            body: formData
          }).then(function (response) {
            return response.json();
          }).then(function (json) {
            console.log(JSON.stringify(json, null, 2));
          });
        }
      }
    });

    this.node.appendChild(titleBar());

    this.node.appendChild(toolBar());
    this.node.appendChild(node({
      tag: TAG.INPUT,
      attribute: {
        'type': 'hidden',
        'name': 'article'
      }
    }));

    this.node.appendChild(article.node);

    this.node.appendChild(node({
      tag: TAG.INPUT,
      attribute: {
        'type': 'submit',
        'value': '貼  文'
      }
    }));
  };

  Post.prototype = Object.create(widget);

  Post.prototype.constructor = Post;

  // post/post.js

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

  var Link = function Link(tag) {
    var el = node({
      tag: TAG.LI
    });

    el.appendChild(node({
      tag: TAG.A,
      attribute: {
        'textContent': tag
      }
    }));

    this.node = el;
  };

  Link.prototype = Object.create(widget);

  Link.prototype.constructor = Link;

  // widget/link.js

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

  var controls = function controls() {
    var newPost = new Link('新  帖');

    var ul = node({
      tag: TAG.UL,
      className: 'nav-control'
    });

    ul.appendChild(newPost.node);

    var el = node({
      tag: TAG.SECTION
    });

    el.appendChild(ul);

    return el;
  };

  var banner = function banner() {
    var el = document.createElement('header');

    var title = document.createElement('h1');
    title.textContent = 'U Log';

    el.appendChild(title);
    el.style.background = '#00a0ffff';
    el.style.height = '5rem';

    el.appendChild(controls());

    return el;
  };

  var content = function content() {
    var card = new Card('blog');
    var post = new Post();
    var el = document.createElement('main');

    card.appendChild(post.node);

    el.appendChild(card.node);

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

  function Blog () {
    var blog = new container('div');

    return blog.setHeader(banner()).setFooter(footer()).setContent(content());
  }
  // blog.js

  /**
   *  @file       index.js
   *  @brief      The entry point of ULog.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       03/12/2018 created.
   *  @date       04/07/2018 last modified.
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

    document.body.appendChild(blog.node);
  });

  // index.js

}());
//# sourceMappingURL=ulog.js.map
