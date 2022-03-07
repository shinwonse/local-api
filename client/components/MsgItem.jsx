import MsgInput from "./MsgInput";

const MsgItem = ({
  id,
  userId,
  timestamp,
  text,
  onUpdate,
  isEditing,
  startEdit,
}) => (
  <li className="messages__item">
    <h3>
      {userId}{" "}
      <sub>
        {new Date(timestamp).toLocaleString("ko-KR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </sub>
    </h3>
    {isEditing ? (
      <>
        <MsgInput mutate={onUpdate} id={id} />
      </>
    ) : (
      text
    )}
    <div className="messages__buttons">
      <button onClick={startEdit}>수정</button>
    </div>
  </li>
);

export default MsgItem;
