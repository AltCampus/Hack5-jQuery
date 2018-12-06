const wrap = (els) => ({
 
    append: (newHtml) => {
      els.forEach(el => {
        if(newHtml) {
          el.innerHTML = newHtml;
          return wrap(el);
        } else {
          return el.innerHTML;
        }
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

    // hasClass: (className) => {
    //     els.forEach(el => {
    //       if(el.classList.contains(className)) return true;
    //       else return false; 
    //     })
    //  },
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
        return(els[0].getAttribute(attribute));
      },


    //   css = function(attribute, value) {
    //     var el = document.querySelectorAll(this.context);
    //     el.forEach(element => {
    //       element.style[attribute] = value;
    //     })
    //   },


  })
  
  const $u = (els) => wrap(document.querySelectorAll(els))
