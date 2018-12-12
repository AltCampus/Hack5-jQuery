class Wrap {
  constructor(els) {
    this.els = els;
    this.store;
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
      } else {
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

  // Load data from the server

  async load(url) {
    let fetchData = await fetch(url).then(d => d.json()).then(v => this.store = v);
    console.log(this.store);
  }

  // Load data from the server using a HTTP POST request.

  post(url, data) {
    let requestData = fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  // Load JSON-encoded data from the server using a GET HTTP request.

  getJSON(url, data) {
    let getData = fetch(url, {
      method: 'GET',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(response => {
      if (response) {
        let res = JSON.stringify(response);
        console.log(res);
      } else {
        throw new Error('Network response was not ok!!');
      }
    })
  }
}

let $ = (v) => new Wrap(document.querySelectorAll(v))