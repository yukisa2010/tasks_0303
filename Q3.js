
          class CommentBox {
            constructor(msg) {
              // selectboxの近くに吹き出しを配置
              this.$box = document.createElement('div')
              this.$div1 = document.createElement('div')
              this.$div2 = document.createElement('div')
              this.$box.innerHTML = msg
              // this.$div1.innerHTML = ' '

              this.transform()
              //ノードを返り値として設定

              this.$box.appendChild(this.$div2)
              this.$box.appendChild(this.$div1)
              this.fragment = document.createDocumentFragment()
              this.fragment.appendChild(this.$box)
              // this.fragment.appendChild(this.$div)
              this.addEvents()

              return this.fragment
            }  

            transform() {
              const obj = {
                box: {
                  width: '100%',
                  height: '60px',
                  fontSize: '12px',
                  position: 'relative',
                  // backgroundColor: 'rgba(191,156,70,0.8)',
                  backgroundColor: 'rgba(255,240,177,1)',
                  color: 'rgb(0,0,0)',
                  padding: '7px 15px 5px',
                  marginBottom: '30px',
                  borderRadius: '10px',
                  border: '2px solid #000'
                },
                div: {
                  position: 'absolute',
                  bottom: '-20px',
                  left: '5%',
                  zIndex: '1',
                  width: '0',
                  height: '0',
                  border: '10px solid transparent',
                  // borderTopColor: 'rgba(191,156,70,0.8)'
                  borderTopColor: 'rgba(255,240,177,1)'
                }
              }

              for(let key in obj.box) {
                this.$box.style[key] = obj.box[key];
              }

              for(let key in obj.div) {
                this.$div1.style[key] = obj.div[key];
                this.$div2.style[key] = obj.div[key];
              }

              this.$div2.style.bottom = '-22px'
              this.$div2.style.borderTopColor = 'rgba(0,0,0,1)'

              
            }


            addEvents() {
              this.$box.addEventListener('mouseover', function(e) {

              })

            }

          }

          msg1 = '　一般的には<b>従量電灯B</b>（関西・中国・四国の場合は<u>従量電灯A相当</u>）をご利用されている方が多いです'
          msg2 = '　一般的には<b>40A</b>をご利用されている方が多いです'


          const comment1 = new CommentBox(msg1)
          const comment2 = new CommentBox(msg2)

          const cont_area = document.getElementsByClassName('cont_area')

          const h3_1 = cont_area[1].getElementsByTagName('h3')[0]
          cont_area[1].insertBefore(comment1, h3_1.nextSibling)


          const h3_2 = cont_area[2].getElementsByTagName('h3')[0]
          cont_area[2].insertBefore(comment2, h3_2.nextSibling)

        
  //hoverしたときに光らせたい・カーソル変えたい
  const select = document.getElementsByTagName('select')

  select[0].addEventListener('change', function(e) {
    if(e.target.value !== '') {

    }
  })

  Array.from(select).forEach(function(element) {
    element.addEventListener('mouseover', function(e) {
      this.style.boxShadow = '0px 0px 5px 5px rgba(66,103,178,0.7)'
      this.style.cursor = 'pointer'
      this.style.transition = '1s'
    })
    element.addEventListener('mouseout', function(e) {
      this.style.boxShadow = ''
      this.style.cursor = ''
      this.style.transition = '1s'
    })
  })

//fragmentでなくdivで囲むようにする
//hoverしたら拡大する
//selectboxをchangeで消せるようにする
//やはりclassを一つにまとめる
//二番目のコメントの位置おかしい







