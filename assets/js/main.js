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
    }
  
  
  })
  
  const $ = (els) => wrap(document.querySelectorAll(els))
