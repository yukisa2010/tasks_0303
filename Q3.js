/*
コメントボックスは目立ちすぎないように青を基調として設定しました。
また、セレクトボックスやもテキストボックスにもマウスhover時のシャドーを
加えました。
*/



  class AddBalloons {
      constructor() {

        this.$commentBox1 = document.createElement('div')
        this.$commentBox2 = document.createElement('div')
        this.$selectBoxes = document.getElementsByTagName('select')
        this.$textBox = document.getElementById('electricityUsage')

        //コメントボックスの仮想DOMを生成
        this.createCommentBoxes()
        //生成した仮想DOMをツリーに挿入
        this.insertCommentBoxes()

        //セレクトボックス・テキストボックスにイベント(hover/change)を付与
        this.addEventsToFormItems()
        //コメントボックスへのhoverイベント付与
        this.addEventsToCommentBoxes()

      }
      
      createCommentBoxes() {

        const messages = [
            '　一般的には<b>従量電灯B</b>（関西・中国・四国の場合は<u>従量電灯A相当</u>）をご利用されている方が多いです',
            '　一般的には<b>40A</b>をご利用されている方が多いです'
        ]

        const commentStyles = {
          parent: {
            position: 'relative',
            height: '70px',
          },
          box: {
            width: '100%',
            height: '60px',
            fontSize: '12px',
            position: 'absolute',
            backgroundColor: '#E0E3DA',
            // backgroundColor: 'rgba(255,240,177,1)',
            color: 'rgb(0,0,0)',
            padding: '7px 15px 5px',
            marginBottom: '30px',
            borderRadius: '10px',
            border: '2px solid #9DC8C8'
          },
          triangle: {
            front: {
              position: 'absolute',
              left: '5%',
              zIndex: '1',
              width: '0',
              height: '0',
              border: '10px solid transparent',
              bottom: '-6px',
              borderTopColor: '#E0E3DA'
              // borderTopColor: 'rgba(255,240,177,1)'
            },
            back: {
              position: 'absolute',
              left: '5%',
              zIndex: '1',
              width: '0',
              height: '0',
              border: '10px solid transparent',
              bottom: '-8px',
              borderTopColor: '#9DC8C8'    
            }
          }
        }

        const fragments = messages.map(function(message) {
          /*
          #fragmentの作成
          |  <div>message</div>
          |  <div></div>
          |  <div></div>
          */
        const fragment = document.createDocumentFragment()
        for(var i=0; i<3; i++) {
          const div = document.createElement('div')
          if(i === 0) {
            div.insertAdjacentHTML('afterbegin', message)
          }
          fragment.appendChild(div)
        }

          /*
           style設定
          */

        for(let key in commentStyles.box) {
          fragment.children[0].style[key] = commentStyles.box[key]
        }

        for(let key in commentStyles.triangle.back) {
          fragment.children[1].style[key] = commentStyles.triangle.back[key]
        }
        
        for(let key in commentStyles.triangle.front) {
          fragment.children[2].style[key] = commentStyles.triangle.front[key]
        }

          return fragment
        })

        const self = this
        for(let key in commentStyles.parent) {
          self.$commentBox1.style[key] = commentStyles.parent[key]
          self.$commentBox2.style[key] = commentStyles.parent[key]
        }

        //あとで削除するためにクラス名を付与
        this.$commentBox1.classList.add('comment-box')
        this.$commentBox2.classList.add('comment-box')

        this.$commentBox1.appendChild(fragments[0])
        this.$commentBox2.appendChild(fragments[1])

      }


      insertCommentBoxes() {

        // プラン
        const planParent = this.$selectBoxes[1].parentNode.parentNode
        planParent.insertBefore(this.$commentBox1, planParent.children[0])

        // アンペア
        const ampParent = this.$selectBoxes[2].parentNode.parentNode
        ampParent.insertBefore(this.$commentBox2, ampParent.children[0])

      }

      addEventsToFormItems() {

        const shadowStyles = {
          add: {
            boxShadow: '0px 0px 5px 5px #9DC8C8',
            cursor: 'pointer',
            transition: '0.1s',  
          },
          remove: {
            boxShadow: '',
            cursor: '',
            transition: '0.1s'
          }
        }

        //mouseover
        function addShadow(e) {
          for(let key in shadowStyles.add) {
            e.currentTarget.style[key] = shadowStyles.add[key]  
          }
        }

        //mouseout
        function removeShadow(e) {
          for(let key in shadowStyles.remove) {
            e.currentTarget.style[key] = shadowStyles.remove[key]  
          }
        }

        //change
        function removeComment(e) {
          const targetCommentBox = e.currentTarget.parentNode.parentNode.children[0]
          if(targetCommentBox.classList.contains('comment-box')) {
            targetCommentBox.style.display = 'none'
          }
        }

        Array.from(this.$selectBoxes).forEach(function($selectBox) {
          $selectBox.addEventListener('mouseover', addShadow)
          $selectBox.addEventListener('mouseout', removeShadow)
          $selectBox.addEventListener('change', removeComment)
        })

        this.$textBox.addEventListener('focus', addShadow)
        this.$textBox.addEventListener('blur', removeShadow)

      }

      addEventsToCommentBoxes() {

        //mouseover
        function zoomUpComment(e) {
          e.currentTarget.style.transition = '0.1s'
          e.currentTarget.style.transform = 'scale(1.05, 1.05)'
        }

        //mouseout
        function zoomOutComment(e) {
          e.currentTarget.style.transition = '0.1s'
          e.currentTarget.style.transform = 'scale(1, 1)'
        }

        this.$commentBox1.addEventListener('mouseover', zoomUpComment)
        this.$commentBox1.addEventListener('mouseout',  zoomOutComment)

        this.$commentBox2.addEventListener('mouseover', zoomUpComment)
        this.$commentBox2.addEventListener('mouseout',  zoomOutComment)

      }


    }

    new AddBalloons()
