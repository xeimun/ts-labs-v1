interface Props {
    input: string;
    setInput: (input: string) => void;
    addTodo: () => void;
}

export default function TodoInput({ input, setInput, addTodo }: Props) {
    // form 제출 시 addTodo 실행
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // 페이지 새로고침 방지
        addTodo();
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="할 일을 입력하세요"
                maxLength={40}
                required
                className="flex-1 border px-3 py-2 rounded text-sm"
            />
            <button
                type="submit"
                className="w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 font-black"
            >
                +
            </button>
        </form>
    );
}
