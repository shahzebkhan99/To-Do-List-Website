//selecting what to add when page is loaded
window.addEventListener('load', () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener('submit', (e) => {
    e.preventDefault(); //adding preventDefault in order to prevent the page to load when task entered



    const task = input.value;

    //added alert to ask user to add task if no task added
    if (!task) {
      alert("Eneter a task");
      return;
    }

    //creating several div
    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    task_el.appendChild(task_content_el);

    //creating a div to add tasks to a new line when added to the list
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    //creating a button to edit the task added if edit pressed
    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = 'Edit';

    //creating a button to delete a task when pressed
    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Delete';

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = '';

    task_edit_el.addEventListener('click', (e) => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    task_delete_el.addEventListener('click', (e) => {
      list_el.removeChild(task_el);
    });
  });
});