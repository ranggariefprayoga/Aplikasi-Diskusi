/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import { FaCommentDots } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { postedAt } from "../utils";

function ThreadItem({ thread }) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${thread.id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`/threads/${thread.id}`);
    }
  };

  return (
    <div role="button" className="thread-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className="thread-item-photo">
        <img src={thread.user.avatar} alt={thread.user.name} />
      </div>
      <div className="thread-item-user">
        <header>
          <div className="thread-item-user-info">
            <h3 className="judul">{thread.title}</h3>
            <p className="name">{thread.user.name}</p>
            <p className="email">{thread.user.email}</p>
          </div>
          <p className="date">{postedAt(thread.createdAt)}</p>
        </header>
        <article className="thread-item-text">
          <p className="text">{parse(thread.body)}</p>
        </article>
        <section className="thread-item-information">
          <p className="comment">
            <FaCommentDots /> :{thread.totalComments}
          </p>
        </section>
      </div>
    </div>
  );
}

export default ThreadItem;
