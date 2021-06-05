// 函式建立的方式
// 1、function a(){}
// 2、let a=function(){}
// 3、let a=()=>{}

// 用function重複取html的元素塞進變數裡
function byId(id) {
  return document.getElementById(id)
}
let todoAdd = byId('todo-add')
let todoInput = byId('todo-input')
let todoList = byId('todo-list')

let todos = [
  { id: 1, text: '買牛奶', completed: true },
  { id: 2, text: 'call-mom', completed: false }
]

function displayTodoList() {
  let display = ''
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === true) {
      // 用js製作html的li
      // HTML都視為字串用''，變數不用''
      display += '<li><del>' + todos[i].text + '</del><button class="todo-complete">完成</button></li>'
    }
    else {
      display += '<li>' + todos[i].text + '<button class="todo-complete">完成</button></li>'
    }
  }
  // 把display這個li塞進ul，再塞進js中todoList中對應的HTML裡
  todoList.innerHTML = '<ul>' + display + '</ul>'

  // 若要使用querySelector，一定要用querySelectorAll
  let todoCompleteButton = document.getElementsByClassName('todo-complete')
   for (let i = 0; i < todoCompleteButton.length; i++) {
    todoCompleteButton[i].addEventListener('click', function(){alert(123)} )
  }
}

// 新增按鍵
// addEventListener('監聽事件',觸發function)
todoAdd.addEventListener('click', function () {
  // add value of todoInput to todos and put in first position  
  // ['    ']許多空白鍵為真家族，會讓if條件為true，用trim()排除
  if (todoInput.value.trim()) {
    // 把每個項目變成object
    let item = { id: +new Date(), text: todoInput.value, completed: false }
    todos.unshift(item)
  }
  // clear todoInput 
  todoInput.value = ''
  // call function等於用function，沒call，function就沒作用
  displayTodoList()
})

// addEventListener('監聽按下鍵盤',觸發匿名function)
// 按下enter鍵，就新增
todoInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    let item = { id: +new Date(), text: todoInput.value, completed: false }
    todos.unshift(item)
    todoInput.value = ''
    displayTodoList()
  }
})

displayTodoList()
