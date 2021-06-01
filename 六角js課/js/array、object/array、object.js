let cornField=[];
// 在cornField arra中加入值.push
cornField.push(5);
cornField.push(8);
cornField.push(10);
// 將陣列中的第一個值從5改成10
cornField[0]=10;
// 在陣列中加入第四個值
cornField[3]=100;
// 陣列長度4
console.log(cornField.length);

let farm={
// 農場的狀態，農場有多少農夫、狗...
// 屬性keyname : 屬性值vaule
// object{}裡，不同屬性中間用,
farmer : '卡斯伯',
dogs:['張姆士','龐德'],
chick : 15,
duck : 3,
cornField:[8,5,6],
broccoliField:[6,6,6,6],
scarecrow : 9,
// 在object中放入function
goDinner : function (){
console.log(farm.farmer+'該回家吃晚飯了')
},
poultryTotal : function (){
let num = farm.chick+farm.duck;
console.log('我的農場總共有'+num+'隻家禽'); 
}
};
farm.goDinner();
// call goDinner 這個function
farm.poultryTotal();


let house={
room : 3,
dad : 'Tom',
mom : 'Mary',
}
// 在house的object中，新增一個屬性及屬性值
house.son=['bob','john'];
console.log(house);
// 更改room屬性的value
house.room=5;
// 取得house中son屬性陣列的第一個值
console.log(house.son[0]);

// 陣列中放物件
let farms=[
{
    farmer : '卡司伯',
    dogs : ['張姆','龐的'],
    chick : 15
},
{
    farmer : 'john',
    dogs : ['皮皮'],
    scarecrow : 10
}
]
// 撈陣列第二個物件狗狗的名字
console.log(farms[1].dogs[0])

console.log(farms[0].dogs[1])