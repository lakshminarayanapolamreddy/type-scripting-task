
        const addedTasks = new Set();
        function addTask() {
            const taskName = document.getElementById('task').value.trim();
            if (taskName === '') {
                alert("Add a Task");
                return;
            }

            if (addedTasks.has(taskName)) {
                alert("Task alredy exisis");
                return;
            }

            addedTasks.add(taskName);
            var tableBody = document.getElementById('taskTableBody');
            document.getElementById("myForm").addEventListener("submit", function(event) {
                event.preventDefault();
            });

            var row = document.createElement("tr");
            row.innerHTML = `
                <td class='check-box'>
                    <input type="checkbox" class="checkbox">
                </td>
                <td class='task-name-in-table' id='taskInTable'><span class = 'a'>${taskName}</span></td>
                <td class='status'>
                    <select>
                        <option>status</option>
                        <option>Completed</option>
                        <option>In Progress</option>
                        <option>To do</option>
                    </select>
                </td>
                <td>
                    <button class='delete-button'>Delete</button>
                </td>            
            `;
            tableBody.appendChild(row);
            
            const deleteButton = row.querySelector(".delete-button");
            const checkbox = row.querySelector(".checkbox");
            const statusSelect = row.querySelector(".status select");
            checkbox.disabled = true;
            deleteButton.addEventListener("click", function() {
                if (confirm("Are you sure you want to delete this task?")) {
                    const taskNameToDelete = row.querySelector('.task-name-in-table').textContent;
                    addedTasks.delete(taskNameToDelete);
                    row.remove();
                }
            });

            statusSelect.addEventListener("change", function() {
                if (this.value === "Completed") {
                    row.classList.add("completed-task");
                    checkbox.checked = true; 
                    addedTasks.delete(taskName)
                } else {
                    row.classList.remove("completed-task");
                    
                    checkbox.checked = false;
                }
            });

            
            search.addEventListener('input', function() {
                const searchText = search.value;
                for (let i = 0; i < tableRows.length; i++) {
                  const taskText = tableRows[i].getElementsByTagName('td')[1].textContent;
                  if (taskText.includes(searchText)) {
                    tableRows[i].style.display = "";
                  } else {
                    tableRows[i].style.display = "none";
                  }
                }
              });
        }
        