// 打招呼
// 宣告函式 函式名稱()
function greet(){
let greetNote = '歡迎光臨，請問您要點什麼?漢堡剩下最後8個喔!'
document.getElementById('greetId').textContent = greetNote;
console.log(greetNote);
}
greet();
// 呼叫greet這個function

// 點餐回應
function order(hamNum,cokeNum){
let total=(hamNum*50)+(cokeNum*20);
document.getElementById('totalId').textContent=total;
}
order(8,1);
order(10,1);

function count(oneNum){
// 區域變數
    let total=oneNum*10;
    console.log('總價格:'+total);
// console.log(total)若寫在function{}外，total為undefined
}
count(8)

let total2;
// 全域變數
function count2(oneNum){
        total2=oneNum*10;
        // 不宣告，外面全域宣告過了
        console.log('總價格:'+total2);
    }
 count2(10)