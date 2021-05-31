// 函式建立的方式
// 1、function a(){}
// 2、let a=function(){}
// 3、let a=()=>{}

// 用function重複取html的元素塞進變數裡
function byId(id){
  return  document.getElementById(id)
}
let todoAdd=byId('todo-add')
let todoInput=byId('todo-input')
let todoList=byId('todo-list')

let todos=[]

// addEventListener('監聽事件',觸發匿名function)
todoAdd.addEventListener('click',function (){
// add value of todoInput to todos and put in first position  
todos.unshift(todoInput.value)
// clear todoInput 
todoInput.value=''
console.log(todos)
} )
