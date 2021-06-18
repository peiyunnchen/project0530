let btn=document.querySelector('.btnClass');
let call=document.querySelector('.btnCall');

function saveName(e){
let str=document.querySelector('.textClass').value;
localStorage.setItem('myName',str)
// 存入localStorage localStorage.setItem('key',value)
}

btn.addEventListener('click',saveName);
call.addEventListener('click',function(){
  let str=localStorage.getItem('myName');
  alert('你的名字叫做'+str)
})
// 拿出localStorage存的資料 localStorage.getItem('key')

let country=[{farmer:'卡斯柏'}];
let countryString=JSON.stringify(country);
localStorage.setItem('countryItem',countryString);
// JSON.stringify(country)將變數轉為string
let getData=localStorage.getItem('countryItem')
let getDataAry=JSON.parse(getData)
// JSON.parse(getData)將變數轉為array

// <---------透過data-存資料、 dataset讀取資料--------------->
let list=document.querySelector('.list li')
function checkList(e){
  let num=e.target.dataset.num;
  let dog=e.target.dataset.dog;
  console.log('農夫編號是'+num);
  console.log('有'+dog+'隻狗');
}
list.addEventListener('click',checkList)

//<--------------------->
let country3=[
  {farmer:'卡斯柏'},
  {farmer:'查理'}
];
let list3=document.querySelector('.list3')
console.log(list3);
function updateList(){
  let str3='';
  let len=country3.length;
  for(let i=0; i<len; i++){
    str3+=`<li data-num="${i}">${country3[i].farmer}</li>`
  }
  list3.innerHTML=str3;
}
updateList()

// function checkList3(e){
//   let num=e.target.nodeName;
//   if(num !== "LI"){return}
//     let str=e.target.dataset.num;
//     console.log('你現在選擇的農夫是'+country3[str].farmer);
// }
//<--------.splice陣列中刪除-----------------> 
function checkList3(e){
  let nodeName=e.target.nodeName;
  if(nodeName !== "LI"){return}
    let num3=e.target.dataset.num;
country3.splice(num3,1);
// 陣列.splice(從第幾個開始,刪除幾個)
updateList()
}
list3.addEventListener('click',checkList3)