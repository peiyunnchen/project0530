// 取id名為countId的元件，當點擊事件發生，執行function
document.getElementById('countId').onclick=function(){
    let hamPrice=50;
    let cokePrice=20;
    let hamNum=parseInt(document.getElementById('hamNum').value)*hamPrice
    let cokeNum=parseInt(document.getElementById('cokeNum').value)*cokePrice
    document.getElementById('totalId').textContent=hamNum+cokeNum;
}
// 讓hamNum這個變數=撈出hamNum這個input裡面的值value
// document.getElementById().vaule取到html元素後，要做的事是取值
// let cokeNum=document.getElementById('cokeNum').type
// 讓hamNum這個變數=撈出hamNum這個input裡面的值type
// hamNum+cokeNum=字串，並非數字
// parseInt()，可將()中的變數type轉為數字

function getHamPrice(num){
let hamPrice=50;
let total=hamPrice*num;
return total;
}
let Tom=getHamPrice(20);
let John=getHamPrice(50);
console.log(John);
// 寫return才能把function內的值丟出來
// 沒寫return Tom、John變數就會是undefined
