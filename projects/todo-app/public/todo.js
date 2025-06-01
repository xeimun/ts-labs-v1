"use strict";
// DOM 요소
const titleElement = document.querySelector("#date-title");
const addInput = document.querySelector("#add-input");
const addForm = document.querySelector("#add-form");
const todoList = document.querySelector("#todo-list");
// 1. 오늘 날짜 표시
function formatDate(date) {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const weekday = days[date.getDay()];
    return `${year}. ${month}. ${day} (${weekday})`;
}
function showTodayDate() {
    if (titleElement) {
        const today = new Date();
        titleElement.textContent = formatDate(today);
    }
}
showTodayDate(); // 페이지 로딩 시 실행
// 2. 할 일 추가
function addTodo() {
    const value = addInput.value.trim();
    if (!value)
        return;
    const li = createTodoItem(value);
    todoList.appendChild(li);
    addInput.value = "";
    addInput.focus();
}
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
});
// 3. 할 일 목록 표시
function createTodoItem(text) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const li = document.createElement("li");
    const toDo = document.createTextNode(text);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    li.appendChild(checkbox);
    li.appendChild(toDo);
    li.appendChild(deleteBtn);
    setupToggleComplete(checkbox, li);
    setupDelete(deleteBtn, li);
    return li;
}
// 4. 할 일 완료/취소 토글
function setupToggleComplete(checkbox, li) {
    checkbox.addEventListener("change", () => {
        li.classList.toggle("checked");
    });
}
// 5. 할 일 삭제
function setupDelete(button, li) {
    button.addEventListener("click", () => {
        li.remove();
    });
}
