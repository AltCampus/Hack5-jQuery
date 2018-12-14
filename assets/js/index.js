class Wrap{
  constructor(els) {
    this.els = els;
  }

  append(newHTML) {
    this.els.forEach(el => {
      let newEle = document.createElement(newHTML);
      el.appendChild(newEle);
    });
    return this;
  }


  addClass(className) {
    this.els.forEach(el => {
      el.classList.add(className)
    })
    return this;
  }

  removeClass(className) {
    this.els.forEach(el => {
      el.classList.remove(className)
    })
    return this;
  }

  hasClass(className) {
    this.els.forEach(el => {
      if (el.classList.contains(className)) {
        console.log(true);
      }
      else {
        console.log(false);
      }; 
    })
    return this;
  }
  attr(key, value) {
    this.els.forEach(el => {
      el.setAttribute(key, value);
    })
    return this;
  }
  removeAttr(key, value) {
    this.els.forEach(el => {
      el.removeAttribute(key, value);
    })
    return this;
  }

  css(attribute, value) {
    this.els.forEach(element => {
      element.style[attribute] = value;
    })
    return this;
  }

  first(attribute, value) {
    this.els[0].style[attribute] = value;
    return this;
  }

  prop(attribute) {
    (this.els[0].getAttribute(attribute));
    return this;
  }

  html(innerText) {
    this.els.forEach(el => {
      if (!innerText) {
        console.log(el.innerHTML);
      } else {
        el.innerHTML = innerText;
      }
    })
    return this;
  }

  find(tag){
    this.els.forEach(el => {
      tag = el;
      console.log(el) 
    })
    return this;
  }

  children(className){
    this.els.forEach(el => {
      className = el
      console.log(el) 
    })
    return this;
  }

  val(newVal){
    this.els.value = newVal;
    // (newVal !== undefined ? this.els.value = newVal : this.els.value);
    return this;
  }

toggleclass(className, status){
  this.els.forEach(el => {
      if (el.classList)
      el.classList.add(className);
    else
      el.className += ' ' + className;

    })
  return this;
}

}


let $ = (v) => new Wrap(document.querySelectorAll(v))