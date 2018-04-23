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
'use strict';

import HTML from '../html/html.js';

import Article from '../widget/article.js';
import Icon from '../widget/icon.js';
import node from '../widget/node.js';
import widget from '../widget/widget.js';
import http from '../http/http.js';

let toolBar = () => {
  let el = node({
    tag: HTML.DIV
  });

  [
    {
      tag: 'edit',
      cmd: '',
    },
    {
      tag:'undo',
      cmd: 'undo',
    },
    {
      tag: 'redo',
      cmd: 'redo',
    },
    {
      tag: 'copy',
      cmd: 'copy',
    },
    {
      tag: 'cut',
      cmd: 'cut',
    },
    {
      tag: 'paste',
      cmd: 'paste',
    },
    {
      tag: 'bold',
      cmd: 'bold',
    },
    { 
      tag: 'italic', 
      cmd: 'italic',
    },
    { 
      tag:'underline', 
      cmd: 'underline',
    },
    {
      tag: 'align-left',
      cmd: 'justifyLeft',
    },
    { 
      tag: 'align-center',
      cmd: 'justifyCenter',
    },
    { 
      tag: 'align-right',
      cmd: 'justifyRight',
    },
    { 
      tag: 'list-ol',
      cmd: 'insertOrderedList',
    },
    { 
      tag: 'list-ul',
      cmd: 'insertUnorderedList',
    },
    { 
      tag: 'indent',
      cmd: 'indent',
    },
    { 
      tag: 'outdent',
      cmd: 'outdent',
    },
    { 
      tag: 'link',
      cmd: '',
      value: ''
    },
  ].forEach(ctrl => {
    let icon = new Icon(ctrl.tag, {
      'mousedown': (e) => {
        e.preventDefault();
      },
      'click': (e) => {
        document.execCommand(ctrl.cmd, false, ctrl.value);
      }
    });

    icon.addClass('edit-tool');

    el.appendChild(icon.node);
  });

  el.className = 'toolBar';

  return el;
};

const titleBar = () => {
  let el = node({
    tag: HTML.DIV,
    className: 'post-title',
  });

  let title = node({
    tag: HTML.H3,
    attribute: {
      'contentEditable': 'true',
    }
  });


  title.innerHTML = '標題：未定';

  el.appendChild(title);

  return el;
};

let Post = function (tag) {
  let article = new Article();
  article.addClass('edit-area')
    .setAttribute('contentEditable', true);

  this.node = node({
    tag: HTML.FORM,
    attribute: {
      'method': 'post',
      'action': 'post.php'
    },
    handler: {
      "submit": (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append('content', article.node.innerHTML);

        fetch('post', {
          method: 'POST',
          body: formData
        }).then(response => {
          return response.json();
        }).then(json => {
          console.log(JSON.stringify(json, null, 2));
        })
      }
    },
  });

  this.node.appendChild(titleBar());

  this.node.appendChild(toolBar());
  this.node.appendChild(node({
    tag: HTML.INPUT,
    attribute: {
      'type': 'hidden',
      'name': 'article'
    }
  }));

  this.node.appendChild(article.node);

  this.node.appendChild(node({
    tag: HTML.INPUT,
    attribute: {
      'type': 'submit',
      'value': '貼  文'
    }
  }));
};

Post.prototype = Object.create(widget);

Post.prototype.constructor = Post;

export default Post;

// post/post.js
