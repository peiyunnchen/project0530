// // // document.getElementById('titleId').textContent='1234'
// // // let el=document.getElementById('titleId')
// // // el.textContent='12345'

// // // // querySelector可選id、class，getElementById只能id
// // // document.querySelector('#titleId')
// // // document.querySelector('.titleClass')

// // // let elQuery=document.querySelector('.titleClass')
// // // elQuery.textContent='234567'

// // // // 選elementID=titleId裡的span
// // // let classSpan=document.querySelector('#titleId span')
// // // classSpan.textContent='8935835'

// // // // querySelector只能選一個element，如果想選同個class裡的多個span，用querySelectorAll
// // // let el=document.querySelectorAll('.titleClass span')
// // // console.log(el)
// // // // console.log會顯示陣列[span,span,span.span]
// // // el[0].textContent='第0個span'
// // // el[1].textContent='第1個span'
// // // el[2].textContent='第2個span'

// // // // 不確定class裡有多少個span，用for迴圈處理
// // // let elLength=el.length
// // // for(let i=0; i<elLength; i++){
// // //     el[i].textContent='for迴圈第'+i+'個span'

// // // }

// // // 利用querySelector更換屬性內的屬性值
// // let el=document.querySelector('.h2class a')
// // // .setAttribute更換屬性值('要更換的屬性','新的屬性值')
// // el.setAttribute('href','http://www.yahoo.com.tw')

// // // 透過js .setAttribute將沒id的h2動態加入id
// // let el2=document.querySelector('.string')
// // el2.setAttribute('id','stringId')

// // 用js在html中加入標籤
// let el=document.querySelector('#main')
// // 塞一個HTML <h1 class="blue"></h1>標籤到div id=main裡面
// // 單引號內要加雙引號，單引+單引會混亂，程式碼不知道哪裡開始或結束
// el.innerHTML='<h1 class="blue">1234</h1>'

// 用getAttribute取連結
var el3=document.querySelector('.h2class a').getAttribute('href')
console.log(el3);
// 用getAttribute取文字
var el4=document.querySelector('.h2class a').textContent
console.log(el4);