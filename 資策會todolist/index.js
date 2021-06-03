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

function displayTodoList (){
  let display='' 
  for(let i=0; i<todos.length; i++){
    // 用js製作html的li
    display+='<li>'+todos[i]+'</li>'
  }
  // 把display這個li塞進ul，再塞進js中todoList中對應的HTML裡
  todoList.innerHTML='<ul>'+display+'</ul>'
}


// 新增按鍵
// addEventListener('監聽事件',觸發匿名function)
todoAdd.addEventListener('click',function (){
// add value of todoInput to todos and put in first position  
// ['    ']許多空白鍵為真家族，會讓if條件為true，用trim()排除
if(todoInput.value.trim()){todos.unshift(todoInput.value)}
// clear todoInput 
todoInput.value=''

// call function等於用function，沒call，function就沒作用
displayTodoList()
} )

