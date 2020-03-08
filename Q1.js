class FloatBox {
  constructor() {
    this.$contBlock = document.getElementsByClassName('contBlock')[0];
    this.$cloneNode = this.$contBlock.cloneNode(true);

    this.addStyles();
    this.addEvents();
  }

  addStyles() {
    const obj = {
      position: 'fixed',
      width: '100%',
      height: '130px',
      backgroundColor: 'rgba(233,235,237,0.8)',
      bottom: '0px'
    }

    for(let key in obj) {
      this.$cloneNode.style[key] = obj[key];
    }
    
    this.$contBlock.parentElement.appendChild(this.$cloneNode);
  
  }

  addEvents() {

    const pos = {
      start: 1600,
      end: 1758 
    }

    const self = this
    window.addEventListener('scroll', function() {
      if(this.scrollY >= pos.start && this.scrollY <= pos.end) {
        self.$cloneNode.style.opacity = (pos.end - this.scrollY)/158;
        self.$cloneNode.style.display = 'block'
      } else if(this.scrollY > pos.end) {  
        self.$cloneNode.style.opacity = 0;
        self.$cloneNode.style.display = 'none'
      } else if(this.scrollY < pos.start) {
        self.$cloneNode.style.opacity = 1;
        self.$cloneNode.style.display = 'block'
      }      
    })
  
  }
}


new FloatBox();

