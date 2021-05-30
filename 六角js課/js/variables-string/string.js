var indexName='珮芸';
// 字串要加單引號
var polite='hello';
var totalPolite=polite+indexName+' 你好'+indexName
document.getElementById('myName').textContent=totalPolite;
// 把字串帶入html的myName中
console.log(polite);
// 瀏覽器檢查console可輸出結果，可查看程式碼是否正確
var cookiePrice=35;
var myMoney=10;
var total=cookiePrice-myMoney;
document.getElementById('cookiePriceId').textContent=cookiePrice;
document.getElementById('myMoneyId').textContent=myMoney;
document.getElementById('totalId').textContent=total;
document.getElementById('five').textContent=cookiePrice*5;

// 避免汙染全域變數，棄用var，使用let、const
// {}區塊裡，使用var，會作用於全域/使用let、const只會作用於{}區塊裡
// const是唯獨變數，不能修改 / let的變數，可以修改
// const {} []裡的內容可以改
const obj={url:'http://xx.com'};
obj.url='x'
console.log(obj.url)
let a=1;
const b=2;
// let、const變數名不能重複