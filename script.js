class TodoList {
    constructor() {
        this.todos = [
            {
                id:1,
                title: "Go home",

            },
            {
                id:2,
                title: "Go school",
                
            }
        ]

        this.addInput = this.getEl(".add-input");
        this.addBtn = this.getEl(".add-btn")
    }

    main() {
        this.add();
    }

    add() {   
        this.addBtn.addEventListener('click', () => {
            const value = this.addInput.value.trim();
            // console.log(value);
            if(!value) {
                return this.addInput.style.border = "solid red"
            }

            this.todos.push({
                id: this.todos.length + 1,
                title: value,
    
            })
        })
    }

    getEl(selector) {
        return document.querySelector(selector)
    }
}

const todoList = new TodoList();
todoList.main();