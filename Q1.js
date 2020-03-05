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
      this.$cloneNode.style['key'] = obj[key];
    }
    
    this.$contBlock.parentElement.appendChild(cloneNode);
  
  }

  addEvents() {

    window.addEventListener('scroll', function() {
      if(this.scrollY >= 1600 && this.scrollY <= 1758) {
        cloneNode.style.opacity = (1758 - this.scrollY)/158;
      } else if(this.scrollY > 1758) {
        cloneNode.style.opacity = 0;
      } else if(this.scrollY < 1600) {
        cloneNode.style.opacity = 1;
      }      
    })
  
  }
}

//消去位置の設定も外部から行いたい。

new FloatBox();

