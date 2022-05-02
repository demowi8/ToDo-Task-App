window.addEventListener('loads', () => {
    //when page loads
    //**Define document variables */
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit',(event) => {
        // !! Prevent default page refresh
        event.preventDefault();
        
        // ** define task variable

        const task = input.value;
        if(!task) {
            alert('Human, add a task. -Alien')
            return;
        }
        
        // ** Create task element node
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        // ** Create task content element node
        const task_content_el = document.createdElement('div');
        task_content_el.classList.add('content');

        // ** append child node to its parent node
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.type = 'text';
        text_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly')

        task_content_el.appendChild(task_input_el);
    })
})