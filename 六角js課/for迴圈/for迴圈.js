// for(){}
// for(宣告初始狀態; 條件; 更新內容){當內容跟條件比對為true，執行這裡的動作}
// for(宣告i=0; 符合條件i<3執行; i++執行完一次更新內容讓i+1)
for(let i=0; i<3; i++){
    console.log(i*i)
}

let farms=[
    {
    farmer:'卡斯伯',
    field:6
},
{
    farmer:'查理',
    field:10
}
]
let farmsTotal=farms.length;
for(i=0; i<farmsTotal; i++){
    console.log('第'+(i+1)+'個農場的主人是'+farms[i].farmer)
}


// 撈出小雞超過100的農場
let farms=[
{
    farmer:'卡斯伯',
    field:6,
    chick:200,
    banana:5000
},
{
    farmer:'查理',
    field:10,
    chick:50,
    banana:1000
},
{
    farmer:'約翰',
    field:6,
    chick:120,
    banana:3215
}
]
let farmstotal=farms.length
for(let i=0; i<farmstotal; i++){
    if(farms[i].chick>100){
        console.log(farms[i].farmer+'的小雞超過一百隻')
    }
}

// 今年的香蕉採收總數
let farmstotal2=farms.length;
let bananaTotal=0;
for(let i=0; i<farmstotal2; i++){
    bananaTotal=bananaTotal+farms[i].banana
    // 第二種寫法bananaTotal+=farms[i].banana
}
console.log('今年村子的香蕉採收量:'bananaTotal)

// 我要找一個農場，買50隻小雞
let farmsTotal3=farms.length;
for(let i=0; i<farmsTotal3; i++){
    if(farms[i].chick>50){
    console.log(farms[i].farmer+'農場的小雞剛好夠')
    farms[i].chick-=50;
    console.log(farms[i].farmer+'的小雞剩下'+farms[i].chick+'隻')
    console.log( farms[i].chick)
    // 程式碼讀到break就不會再往下執行
    break;
    }
}