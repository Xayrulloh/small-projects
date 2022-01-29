const filters = document.querySelectorAll('li[role="presentation"]')
const input = document.querySelector('.add-task')
const list = document.querySelector('.todo-list')
const database = window.localStorage.getItem('todos')
const todos = database ? JSON.parse(database) : []
let globalFilter = 'all'

for(let filter of filters) {
	filter.onclick = () => {
		filters.forEach(el => el.classList.remove('active'))
		filter.classList.add('active')
		globalFilter = filter.dataset.filter
		renderTodos()
	}
}

input.onkeyup = event => {
	if(!(event.keyCode == 13) || !event.target.value.trim()) return

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

function renderTodos () {
	list.innerHTML = null
	let allTodos = ''

	function attachTodo (todo) {
		allTodos += `
			<div class="todo-item">
			    <div class="checker">
			    	<span>
			    		<input ${todo.done && 'checked'} data-id="${todo.id}" onclick="checkInput(this)" type="checkbox">
			    	</span>
			    </div>
			    <span>${todo.body}</span>
			    <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>
			</div>
		`
	}

	for(let todo of todos) {
		if(globalFilter == 'all') attachTodo(todo)
		if(globalFilter == 'active' && !todo.done) attachTodo(todo)
		if(globalFilter == 'completed' && todo.done) attachTodo(todo)
	}

	list.innerHTML = allTodos
}

function checkInput (event) {
	const found = todos.find(el => el.id == event.dataset.id)
	if(found) {
		found.done = event.checked
		window.localStorage.setItem('todos', JSON.stringify(todos))
		renderTodos()
	}
}

function idGenerator () {
	return +(Date.now() + '').slice(-5)
}

renderTodos()