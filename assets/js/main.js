const wrap = (els) => ({
  append: (newHtml) => {
    els.forEach(el => {
      let newEle = document.createElement(newHtml);
      el.appendChild(newEle);
    });
  },

  addClass: (className) => {
    els.forEach(el => {
      el.classList.add(className)
    })
  },

  removeClass: (className) => {
    els.forEach(el => {
      el.classList.remove(className)
    })
  },

  hasClass: (className) => {
    els.forEach(el => {
      if (el.classList.contains(className)) {
        console.log(true);
      }
      else {
        console.log(false);
      }; 
    })
  },

  attr: (key, value) => {
    els.forEach(el => {
      el.setAttribute(key, value);
    })
  },

  removeAttr: (key, value) => {
    els.forEach(el => {
      el.removeAttribute(key, value);
    })
  },

  css: (attribute, value) => {
    els.forEach(element => {
      element.style[attribute] = value;
    })
  },

  first: (attribute, value) => {
    els[0].style[attribute] = value;
  },

  prop: (attribute) => {
    return (els[0].getAttribute(attribute));
  },
  html: (innerText) => {
    els.forEach(el => {
      if (!innerText) {
        console.log(el.innerHTML);
      } else {
        el.innerHTML = innerText;
      }
    })
  }
})

const $ = (els) => wrap(document.querySelectorAll(els))