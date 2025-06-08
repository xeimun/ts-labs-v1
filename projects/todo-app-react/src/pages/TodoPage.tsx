import { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";

type Todo = {
    id: string;
    text: string;
    isChecked: boolean;
};

export default function TodoPage() {
    const getInitialTodos = (): Todo[] => {
        const saved = localStorage.getItem("todoItems");
        return saved ? JSON.parse(saved) : [];
    };

    // localStorage에서 todos 불러와 초기값 세팅
    const [todos, setTodos] = useState<Todo[]>(getInitialTodos);
    const [input, setInput] = useState("");

    // todos가 바뀔 때마다 localStorage에 저장
    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(todos));
    }, [todos]);

    // Todo 추가
    const addTodo = () => {
        const text = input.trim();
        if (!text) return;

        setTodos([...todos, { id: Date.now().toString(), text, isChecked: false }]);
        setInput("");
    };

    // Todo 완료 여부 체크박스
    const toggleTodo = (index: number) => {
        const newTodos = [...todos]; // 복사본을 사용해야 React가 리렌더링 함(다른 참조값)
        newTodos[index].isChecked = !newTodos[index].isChecked;
        setTodos(newTodos);
    };

    // Todo 삭제
    const deleteTodo = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    // Todo 수정
    const updateTodo = (index: number, newText: string) => {
        const updatedText = newText.trim();
        if (!updatedText) return;

        const updatedTodos = [...todos];
        updatedTodos[index].text = updatedText;
        setTodos(updatedTodos);
    };

    // 날짜 표시
    const formatDate = (date: Date) => {
        const days = ["일", "월", "화", "수", "목", "금", "토"];
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const weekday = days[date.getDay()];

        return `${year}. ${month}. ${day} (${weekday})`;
    };

    return (
        <main className="max-w-md mx-auto mt-12 bg-white shadow-md rounded-lg p-6">
            <h1 className="text-lg font-bold mb-4 text-left">{formatDate(new Date())}</h1>

            <TodoInput input={input} setInput={setInput} addTodo={addTodo} />

            <div className="text-sm text-gray-500 mt-6 mb-6 text-left">
                {todos.filter((todo) => !todo.isChecked).length} tasks left
            </div>

            <ul className="space-y-4">
                {todos.map((todo, i) => (
                    <TodoItem
                        key={todo.id}
                        item={todo}
                        onToggle={() => toggleTodo(i)}
                        onDelete={() => deleteTodo(i)}
                        onUpdate={(text) => updateTodo(i, text)}
                    />
                ))}
            </ul>
        </main>
    );
}
