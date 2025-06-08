import { useState, useRef, useEffect } from "react";

type Todo = {
    id: string;
    text: string;
    isChecked: boolean;
};

interface Props {
    item: Todo;
    onToggle: () => void;
    onDelete: () => void;
    onUpdate: (newText: string) => void;
}

export default function TodoItem({ item, onToggle, onDelete, onUpdate }: Props) {
    const [isEditing, setIsEditing] = useState(false); // true면 편집 모드 열기, false면 편집 모드 닫기
    const [text, setText] = useState(item.text);
    const inputRef = useRef<HTMLInputElement>(null);

    // 편집 모드일 때 자동 포커스
    useEffect(() => {
        if (isEditing) inputRef.current?.focus();
    }, [isEditing]);

    // 엔터 또는 ESC 키 처리
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && text.trim()) {
            onUpdate(text.trim());
            setIsEditing(false);
        } else if (e.key === "Escape") {
            setText(item.text); // 복원
            setIsEditing(false);
        }
    };

    // 포커스 아웃되었을 때 처리
    const handleBlur = () => {
        // 포커스 아웃되면 수정된 내용 반영
        // const editedText = text.trim();
        // if (editedText && editedText !== item.text) {
        //     onUpdate(editedText);
        // }
        setIsEditing(false);
        setText(item.text);
    };

    return (
        <li className="flex items-center gap-2 group">
            <input
                type="checkbox"
                checked={item.isChecked}
                onChange={onToggle}
                className="w-5 h-5 accent-blue-500 mr-2"
            />
            {isEditing ? (
                <input
                    ref={inputRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                    className="border px-2 py-1 rounded text-sm flex-1"
                />
            ) : (
                <span
                    className={`flex-1 text-sm break-all text-left ${
                        item.isChecked ? "line-through text-gray-400" : ""
                    }`}
                >
                    {item.text}
                </span>
            )}
            <button
                onClick={() => setIsEditing(true)}
                className="text-xs text-blue-500 hover:bg-blue-100 hidden group-hover:inline"
            >
                수정
            </button>
            <button
                onClick={onDelete}
                className="text-xs text-red-500 hover:bg-red-100 hidden group-hover:inline"
            >
                삭제
            </button>
        </li>
    );
}
