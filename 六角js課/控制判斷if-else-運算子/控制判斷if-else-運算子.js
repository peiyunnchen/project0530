let myMonth=5;
let thisMonth=12;
let birthdayCheck= myMonth==thisMonth;
document.getElementById('birthdayId').textContent=birthdayCheck;

let nowPeople=1;
let totalPeople=2;
let allPeopleNoHereCheck=totalPeople!== nowPeople;
document.getElementById('peopleId').textContent=allPeopleNoHereCheck;

let hungry='飽足'
// if(條件){條件為true要執行的事}
if (hungry=='飢餓'){
    console.log('現在好餓')
}
// if裡的條件為false，就執行else裡的動作
else{
    console.log('走吧')
}

// 飽足程度1~10
let hungry=5;
function eat(food){
    console.log('現在要吃'+food);
}
// 成立就執行eat這個function
if(hungry<=3){
    eat('披薩')
}else if(hungry<=7 && hungry>3){
    eat('沙拉')
}else if(hungry==6){
    eat('餅乾')
}else {
    console.log('超飽，不吃東西')
}

let light='red'

switch(light){
    // 看light是否符合此case
    case 'red'
    alert('紅色警戒');
    break;
    
    case 'blue';
    alert('藍色警戒');
    break;
    
    default;
    alert('預設行動');
    break;
}