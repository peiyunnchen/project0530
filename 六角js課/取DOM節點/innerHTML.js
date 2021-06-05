// let el=document.querySelector('.list')
// let link='http://yahoo.com.tw'
// let name='查理'
// el.innerHTML='<li><a href="http://www.yahoo.com.tw">查理</a></li>'

// let link1='http://www.google.com'
// let name1='卡斯伯'
// el.innerHTML='<li><a href=" '+link1+' "> '+name1+' </a></li>'


// innerHTML+for迴圈
let farms=[
    {
        farmer:'卡斯伯',
        dogs:['張姆士','龐的']
    },
    {
        farmer:'查理',
        dogs:['皮皮']
    }
]
let farmslen=farms.length
let string=''
for(let i=0; i<farmslen; i++){
    let content='<li>' +farms[i].farmer+ '</li>'
    string+=content
    console.log(string)
}
let farmsel=document.querySelector('.list')
farmsel.innerHTML=string