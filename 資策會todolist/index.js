// 函式建立的方式
// 1、function a(){}
// 2、let a=function(){}
// 3、let a=()=>{}

let byId=(id)=>{}
function byId(id){document.getElementById(id)}

// return
function XX(){
    let a=1
    a
}
function XX(){
    let a=1
    return a
}
// 沒寫return，call function就不會有值


// 重複取洞節點，再命名洞節點
let todoAdd= document.getElementById('todo-add')
let todoInput= document.getElementById('todo-input')
let todoList= document.getElementById('todo-list')
// 為避免上面重複做同樣的事情，使用function
function byId(id){
  return  document.getElementById(id)
}
return後call function byId('todo-add')才會有值，才可以塞進function區塊外的變數內
let todoAdd= byId('todo-add')
let todoInput= byId('todo-input')
let todoList= byId('todo-list')
