import { useRef } from "react";

const MsgInput = ({ mutate, id = undefined }) => {
  const textRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = "";
    mutate(text);
  };

  return (
    <form className="message_input" onSubmit={onSubmit}>
      <textarea ref={textRef} placeholder="내용을 입력하세요." />
      <button type="submit">완료</button>
    </form>
  );
};

export default MsgInput;
