// DOM 요소
const titleElement = document.querySelector("#date-title");
const addInput = document.querySelector("#add-input") as HTMLInputElement;
const addForm = document.querySelector("#add-form") as HTMLFormElement;
const todoList = document.querySelector("#todo-list") as HTMLUListElement;
const taskCount = document.querySelector("#task-count") as HTMLDivElement;

// 1. 오늘 날짜 표시
function formatDate(date: Date): string {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const weekday = days[date.getDay()];
    return `${year}. ${month}. ${day} (${weekday})`;
}

function showTodayDate(): void {
    if (titleElement) {
        const today = new Date();
        titleElement.textContent = formatDate(today);
    }
}

// 페이지 로딩
showTodayDate();
loadTodos();

// 2. 할 일 추가
function addTodo(): void {
    const value = addInput.value.trim();
    if (!value) return;

    const li = createTodoItem(value);
    todoList.appendChild(li);

    addInput.value = "";
    addInput.focus();

    saveTodos();
}

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
});

// 3. 할 일 목록 표시
function createTodoItem(text: string): HTMLLIElement {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textSpan = document.createElement("span");
    textSpan.className = "todo-text";
    textSpan.textContent = text;

    const modifyBtn = document.createElement("button");
    modifyBtn.textContent = "수정";
    modifyBtn.className = "modify-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "delete-btn";

    const groupBtn = document.createElement("div");
    groupBtn.className = "group-btn";
    groupBtn.appendChild(modifyBtn);
    groupBtn.appendChild(deleteBtn);

    const li = document.createElement("li");
    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(groupBtn);

    setupToggleComplete(checkbox, li);
    setupEdit(modifyBtn, li);
    setupDelete(deleteBtn, li);

    return li;
}

// 4. 할 일 완료/취소 토글
function setupToggleComplete(checkbox: HTMLInputElement, li: HTMLLIElement): void {
    checkbox.addEventListener("change", () => {
        li.classList.toggle("checked");

        saveTodos();
    });
}

// 5. 할 일 삭제
function setupDelete(button: HTMLButtonElement, li: HTMLLIElement): void {
    button.addEventListener("click", () => {
        li.remove();

        saveTodos();
    });
}

// 6. 할 일 수정
function setupEdit(button: HTMLButtonElement, li: HTMLLIElement): void {
    button.addEventListener("click", () => {
        const textSpan = li.querySelector(".todo-text");
        const originalText = textSpan?.textContent as string;

        // 기존 요소 숨기기
        Array.from(li.children).forEach((child) => {
            (child as HTMLElement).style.display = "none";
        });

        // 체크 상태 해제
        const isChecked = li.classList.contains("checked");
        if (isChecked) {
            li.classList.remove("checked");
        }

        // 수정창 생성
        const inputEdit = document.createElement("input");
        inputEdit.type = "text";
        inputEdit.value = originalText;
        inputEdit.className = "edit-input";

        li.appendChild(inputEdit);
        inputEdit.focus();

        // 키보드 이벤트 처리
        inputEdit.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const newText = inputEdit.value.trim();
                if (newText) {
                    const newLi = createTodoItem(newText);
                    li.replaceWith(newLi);

                    saveTodos();
                } else {
                    restoreOriginal(li); // 공백 입력 -> 취소
                }
            } else if (e.key === "Escape") {
                restoreOriginal(li);
            }
        });

        // 5. 포커스 아웃 이벤트 처리
        inputEdit.addEventListener("blur", () => {
            restoreOriginal(li);
        });

        // 기존 Todo 복원 함수
        function restoreOriginal(li: HTMLLIElement) {
            inputEdit.remove();
            Array.from(li.children).forEach((child) => {
                (child as HTMLElement).style.display = "";
            });
            if (isChecked) {
                li.classList.add("checked");
            }
        }
    });
}

// 7. 남은 할 일 개수 표시
function updateTodoCount(): void {
    const liList = todoList.querySelectorAll("li");
    const total = liList.length;
    const done = Array.from(liList).filter((li) => li.classList.contains("checked")).length;
    const left = total - done;
    taskCount.textContent = `${left} tasks left`;
}

// 8. 데이터 영속성(로컬스토리지)
function saveTodos(): void {
    const todos = Array.from(todoList.querySelectorAll("li")).map((li) => {
        const text = li.querySelector(".todo-text")?.textContent;
        const isChecked = li.classList.contains("checked");
        return { text, isChecked };
    });

    localStorage.setItem("todoItems", JSON.stringify(todos));

    updateTodoCount();
}

type TodoItem = {
    text: string;
    isChecked: boolean;
};

function loadTodos(): void {
    const data = localStorage.getItem("todoItems");
    if (!data) return;

    const todos = JSON.parse(data) as TodoItem[];

    todos.forEach(({ text, isChecked }) => {
        const li = createTodoItem(text);
        if (isChecked) {
            const checkbox = li.querySelector("input[type='checkbox']") as HTMLInputElement;
            checkbox.checked = true;
            li.classList.add("checked");
        }
        todoList.appendChild(li);
    });

    updateTodoCount();
}
