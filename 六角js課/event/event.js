// var el =document.querySelector('.btn');
// // <-----------下方是舊式寫法---------------->
// // 使用event onclick事件
// // 在function中放入變數，log可看見onclick傳出的詳細資訊座標等等
// el.onclick=function(e){
//     alert('hello')
// console.log(e);
// }
// // <-----------下方是新式寫法----------------->
//                     //(事件,匿名function,false)
// el.addEventListener('click',function(e){
//     alert('hello2')}
//     ,false)

//     var elBody=document.querySelector('.body')
//     elBody.addEventListener('click',function(){alert('body')},false)
//     var elBox=document.querySelector('.box')
//     elBox.addEventListener('click',function(e){
//         e.stopPropagation();
//         alert('box')
//     },false)
//     // false從指定元素向外層找 (可以不寫，default為false)
//     // true從外層向指定元素找
//     // .stopPropagation 阻止事件擴散，要給function變數才能得到event的物件
// var elA=document.querySelector('.link')
// elA.addEventListener('click',function(e){
//     e.preventDefault();
//     console.log('prevent');
// })
// // .preventDefault取消執行元素預設行為
// // 比如用在form表單submit按鈕，想先透過js查詢表單有無錯誤再傳送至後端，不要直接傳

// var elUl=document.querySelector('.header')
// elUl.addEventListener('click',function(e){
// console.log(e.target);
// })
// // 利用事件回傳的物件，取得物件中的資料

let area = document.querySelector("#areaId");
let list = document.querySelector(".list");
let country = [
  {
    farmer: "查理",
    place: "前鎮區"
  },
  { 
      farmer: "卡斯柏", 
      place: "苓雅區" 
    },
  { 
      farmer: "小花", 
      place: "苓雅區" }
];

let len=country.length;
function updateList(e){
    let selectValue=e.target.value;
    let str='';
    for(i=0; i<len; i++){
        if(selectValue==country[i].place){
            str+=`<li>${country[i].farmer}</li>`
        }
    }
    list.innerHTML=str;
}
// 不用''跟+，變數用${}包裹。外圍用``

// 當select change時，啟動updateList function
area.addEventListener('change',updateList)

// <-------從父元素監聽子元素，點擊LI以外的元素都不會觸發function------> 
let list2=document.querySelector('.list2')
list2.addEventListener('click',checkName)
function checkName(e){
    if(e.target.nodeName !== 'LI'){return}
    console.log(e.target.textContent);
}