// 函式建立的方式
// 1、function a(){}
// 2、let a=function(){}
// 3、let a=()=>{}

// 用function重複取html的元素塞進變數裡
function byId(id) {
  return document.getElementById(id)
}
let todoAddBtn = byId('todo-add')
let todoInput = byId('todo-input')
let todoList = byId('todo-list')

let todos = [
  { id: 1111, text: '買牛奶', completed: true, edited:false },
  { id: 2222, text: 'call-mom', completed: false, edited:true }
]


// 製作一個complete function，當點擊事件取得的id與項目相符，complete狀態會由true轉為false、false轉true
function toggleComplete(id) {
  for (let i = 0; i < todos.length; i++) {
    // +id的意思是將id由字串轉為數字
    if (todos[i].id === +id) {
      todos[i].completed = !todos[i].completed
      // 狀態轉為相反，使用!
      console.log();
    }
  }

}
function toggleEdit(id) {
  for (let i = 0; i < todos.length; i++) {
    // 關起其他全部編輯視窗
    todos[i].edited=false
    if (todos[i].id === +id) {
      todos[i].edited = !todos[i].edited
      // 狀態轉為相反，使用!
      console.log('edit',todos[i].edited);
    }
  }
  
}
function saveItem(id,value) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === +id) {
      todos[i].text=value
      todos[i].edited = !todos[i].edited
      console.log('save',todos[i].edited);
    }
  }
}

function deleteItem(id){
  // 使用filter
let newTodos=todos.filter(function(item){return item.id !== +id})
todos=[...newTodos]
// 利用...展開array傳值，不然就會變成傳址
}

`ul>li*10`
function displayTodoList() {
  let display = ''
  for (let i = 0; i < todos.length; i++) {
    // if ( todos[i].edited === true) {
    //   // 用js製作html的li
    //   // HTML都視為字串用''，變數不用''
    //   // display += '<li><del>' + todos[i].text + '</del><button class="todo-complete" data-id= "'  + todos[i].id + ' ">完成</button></li>'
    //   // display += '<li>' + todos[i].text + '<button class="todo-complete" data-id=(todos[i].id)>完成</button></li>'
    //   // 不用''跟+，變數用${}包裹。外圍用``
    //   display += `<li>
    //   <input type="text" id='editValue' value="${todos[i].text}"/>
    //   <button class="todo-save" data-id= "${todos[i].id}">儲存</button>
    //   <button class="todo-complete" data-id= "${todos[i].id}">完成</button>
    //   <button class="todo-delete" data-id= "${todos[i].id}">刪除</button>
    //   </li>`
    // }else if (todos[i].completed === true) {
    //   display += `<li> 
    //   <del><span class="todo-item" data-id="${todos[i].id}">${todos[i].text}</span></del>
    //   <button class="todo-edit" data-id= "${todos[i].id}">編輯</button>
    //   <button class="todo-complete" data-id= "${todos[i].id}">完成</button>
    //   <button class="todo-delete" data-id= "${todos[i].id}">刪除</button>
    //   </li>`
    // }else {
    //   display += `<li>
    //   <span class="todo-item"  data-id= "${todos[i].id}"> ${todos[i].text}</span>
    //   <button class="todo-edit" data-id= "${todos[i].id}">編輯</button>
    //   <button class="todo-complete" data-id="${todos[i].id}">完成</button>
    //   <button class="todo-delete" data-id="${todos[i].id}">刪除</button>
    //   </li>`
    // }
    if (todos[i].edited === true) {
      display += `<li class="list-group-item d-flex">
      <input type="text" id='editValue' class='p-2 flex-grow-1' value="${todos[i].text}"/>
      <button type="button" class="todo-save btn btn-info btn-sm "  data-id= "${todos[i].id}">儲存</button>
      <button type="button" class="todo-complete btn btn-success btn-sm mx-1" data-id= "${todos[i].id}">完成</button>
      <button type="button" class="todo-delete btn btn-secondary btn-sm" data-id= "${todos[i].id}">刪除</button>
      </li>`



    }else {  if (todos[i].completed === true){
      display += `<li class="list-group-item d-flex"> 
      <del class='p-2 flex-grow-1'><span class="todo-item" data-id="${todos[i].id}">${todos[i].text}</span></del>
      <button type="button" class="todo-edit btn btn-info btn-sm" data-id= "${todos[i].id}">編輯</button>
      <button type="button" class="todo-complete btn btn-success btn-sm mx-1" data-id= "${todos[i].id}">完成</button>
      <button type="button" class="todo-delete btn btn-secondary btn-sm" data-id= "${todos[i].id}">刪除</button>
      </li>`}else {
        display += `<li class="list-group-item d-flex">
        <span class="todo-item p-2 flex-grow-1"  data-id= "${todos[i].id}"> ${todos[i].text}</span>
        <button type="button" class="todo-edit btn btn-info btn-sm" data-id= "${todos[i].id}">編輯</button>
        <button type="button" class="todo-complete btn btn-success mx-1 btn-sm" data-id="${todos[i].id}">完成</button>
        <button type="button" class="todo-delete btn btn-secondary btn-sm"  data-id="${todos[i].id}">刪除</button>
        </li>`
      }
    }
  }
  // 把display這個li塞進ul，再塞進js中todoList中對應的HTML裡
  // todoList.innerHTML = '<ul>' + display + '</ul>'
  todoList.innerHTML = `<ul class="list-group">${display} </ul>`

  // 若要使用querySelector，一定要用querySelectorAll
  let todoCompleteButton = document.getElementsByClassName('todo-complete')
  for (let i = 0; i < todoCompleteButton.length; i++) {
    todoCompleteButton[i].addEventListener(
      'click', function (event) {
        toggleComplete(event.target.dataset.id)
        displayTodoList()
      })
  }
  let todoDeleteButton = document.getElementsByClassName('todo-delete')
  for (let i = 0; i < todoDeleteButton.length; i++) {
    todoDeleteButton[i].addEventListener(
      'click', function (event) {
        deleteItem(event.target.dataset.id)
        displayTodoList()
      })
  }
  let todoEditButton = document.getElementsByClassName('todo-edit')
  for (let i = 0; i < todoEditButton.length; i++) {
    todoEditButton[i].addEventListener(
      'click', function (event) {
        toggleEdit(event.target.dataset.id)
        displayTodoList()
        console.log('click');
      })
    // 利用click事件，抓id
  }
  let todoItem = document.getElementsByClassName('todo-item')
  for (let i = 0; i < todoItem.length; i++) {
    todoItem[i].addEventListener(
      'dblclick', function (event) {
        toggleEdit(event.target.dataset.id)
        displayTodoList()
        console.log('dblclick');
      })
  }
  let todoSaveButton = document.getElementsByClassName('todo-save')
  for (let i = 0; i < todoSaveButton.length; i++) {
    todoSaveButton[i].addEventListener(
      'click', function (event) {
        saveItem(event.target.dataset.id,editValue.value)
        displayTodoList()
      })
    // 利用click事件，抓id跟value
  }
}



// 新增按鍵
// addEventListener('監聽事件',觸發function)
todoAddBtn.addEventListener('click', function () {
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
    if (todoInput.value.trim()) {
      let item = { id: +new Date(), text: todoInput.value, completed: false }
    todos.unshift(item)
    todoInput.value = ''
    displayTodoList()
    }
  }
})

// 這行在執行以上所有的程式碼
displayTodoList()