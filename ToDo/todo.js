const filters = document.querySelectorAll('li[role="presentation"]')
const input = document.querySelector('.add-task')
const list = document.querySelector('.todo-list')
const database = window.localStorage.getItem('todos')
let globalFilter = 'all'
const todos = database ? JSON.parse(database) : []

for (let filter of filters) {
    filter.onclick = () => {
        filters.forEach(el => el.classList.remove('active'))
        filter.classList.add('active')
        globalFilter = filter.dataset.filter
        renderTodos()
    }
}

input.onkeyup = event => {
    if (!(event.keyCode == 13) || !event.target.value.trim()) return

    todos.push({
        id: idGenerator(),
        body: event.target.value,
        done: false
    })

    window.localStorage.setItem('todos', JSON.stringify(todos))

    renderTodos()

    input.value = null
    input.focus()
}

function renderTodos() {
    list.innerHTML = null
    let allTodos = ''

    function attachTodo (todo) {
        allTodos += `
            <div class="todo-item">
                <div class="checker"><span class=""><input ></span></div>
                <span>Create theme</span>
                <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>
            </div>`
    }
}





