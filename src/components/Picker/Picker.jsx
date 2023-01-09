import { forwardRef, useState, useRef, useEffect } from "react";
import Options from "./Options";
import { data as list } from "../data";

const Picker = (props, inputRef) => {
  const [open, setOpen] = useState(false);
  const [emojis, setEmojis] = useState([...list]);

  const containerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!containerRef.current.contains(e.target)) {
        setOpen(false);
        setEmojis([...list]);
      }
    });
  }, []);

  const searchEmojiHandler = (e) => {
    const q = e.target.value.toLowerCase();

    if (!!q) {
      const search = list.filter((item) => {
        return (
          item.name.toLowerCase().includes(q) ||
          item.keywords.toLowerCase().includes(q)
        );
      });
      setEmojis(search);
    } else {
      setEmojis(list);
    }
  };

  const openHandler = () => {
    setOpen((prev) => !prev);
  };

  function handleOnClickEmoji(emoji) {
    const cursorPos = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice(0, cursorPos);
    const next = text.slice(cursorPos);

    inputRef.current.value = prev + emoji + next;
    inputRef.current.selectionStart = cursorPos + emoji.length;
    inputRef.current.selectionEnd = cursorPos + emoji.length;
    inputRef.current.focus();
  }

  return (
    <div ref={containerRef}>
      <button onClick={openHandler}>😊</button>
      {open ? (
        <Options
          listEmojis={emojis}
          changeHandler={searchEmojiHandler}
          emojiHandler={handleOnClickEmoji}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default forwardRef(Picker);
