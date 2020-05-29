(function(){
    'use trick';
    let tasker = {
        init: function(){
            this.cacheDom();
            this.bindEvents();
            this.evalTasklist();
        },
        cacheDom: function(){
            this.taskInput = document.getElementById('input-task');
            this.addBtn = document.getElementById('add-task-btn');
            this.tasklist = document.getElementById('tasks');
            this.tasklistChilden = this.tasklist.tasklistChilden;
            this.errorMessage = document.getElementById('error');
        },
        bindEvents: function(){
            this.addBtn.onclick = this.addtask.bind(this);
            this.taskInput.onkeypress = this.enterKey.bind(this);
        },
        evalTasklist: function(){
            let i, chkbox, delbtn;

            for(let i =0; i < this.tasklistChilden.length; i+=1){
                chkbox = this.tasklistChilden[i].getElementByTagName('input')[0];
                chkbox.onclick = this.completeTask.bind(this, this.tasklistChilden[i], chkbox);

                delbtn = this.tasklistChilden[i].getElementByTagName('button')[0];
                delbtn.onclick = this.delTask.bind(this, i);
            }
        },
        render: function(){
            let taskli, taskcheck, taskvalidate, taskbtn, tasktrash;

            taskli = document.createElement('li');
            taskli.setAttribute('class', 'tasks');

            taskcheck = document.createElement('input');
            taskcheck.setAttribute('type', 'checkbox');

            taskvalidate = document.createTextNode(this.taskInput.value);

            taskbtn = document.createElement('button');

            tasktrash = document.createElement('i');
            tasktrash.setAttribute('class', 'fa fa-trash');
            taskbtn.appendChild(tasktrash);

            taskli.appendChild(taskcheck);
            taskli.appendChild(taskvalidate);
            taskli.appendChild(taskbtn);

            this.tasklist.appendChild(taskli);
        },

        completeTask: function(i, chkbox){
            if (chkbox.checked) {
                i.className = 'task completed';
            }
            else{
                this.incompleteTask(i);
            }
        },

        incompleteTask: function(i){
            i.className = 'task';
        },

        enterKey: function(event){
            if (event.keyCode === 13 || event.which === 13) {
                this.addtask();
            }
        },

        addtask: function(){
            let value = this.taskInput.value;
            this.errorMessage.style.display = 'none';
            
            if (value === '') {
                this.error();
            }
            else{
                this.render();
                this.taskInput.value = '';
                this.evalTasklist();
            }
        },

        delTask: function(i){
            this.tasklist.children[i].remove;
            this.evalTasklist();
        },

        error: function(){
            this.errorMessage.style.display = 'block';
        }
    };

    tasker.init();
}());