
      class CommentBox {
        constructor(msg) {
          // selectboxの近くに吹き出しを配置
          this.$box = document.createElement('div')
          this.$box.innerHTML = msg

          this.transform()
          this.addText()
          this.addEvents()
          //ノードを返り値として設定
          return this.$box
        }  

        transform() {
          this.$box.style.width = '100%'
          this.$box.style.height = '50px'
          this.$box.style.fontSize = '12px'
          this.$box.style.backgroundColor = 'rgba(191,156,70,0.8)'
          this.$box.style.color = 'rgb(255,255,255)'
          this.$box.style.padding = '5px'
          this.$box.style.borderRadius = '10px'

          const body = document.getElementsByTagName('body')[0]
          const style = document.createElement('style')
          style.innerHTML = `
            
          `
          
        }

        addText() {
          //コメントの挿入。枠に合わせてAdjustできるのがベスト
        }

        addEvents() {
          //selectボックスの選択値によって場所を変える。
        }

      }

      msg1 = '一般的には従量電灯B（関西・中国・四国の場合は従量電灯A相当）をご利用されている方が多いです'
      msg2 = '一般的には40Aをご利用されている方が多いです'


      const comment1 = new CommentBox(msg1)


      const cont_area = document.getElementsByClassName('cont_area')[1]
      const h3 = cont_area.getElementsByTagName('h3')[0]
      cont_area.insertBefore(comment1, h3.nextSibling)
      


      // const comment2 = new CommentBox(msg2)

      //その他、位置の設定は外部から行いたい。
      //スタイル、中でも色とか大きさとかの設定も外部からやりたい。


