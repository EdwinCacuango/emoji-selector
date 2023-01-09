import React from "react";
import EmojiBtn from "./EmojiBtn";

const Options = ({ listEmojis, changeHandler, emojiHandler }) => {
  return (
    <div className="absolute md:block left-10 md:left-auto my-4 border p-2 rounded">
      <input
        className="border rounded my-4 p-1 w-full"
        onChange={changeHandler}
        placeholder="Search an emoji"
      />
      <div className="flex gap-4 justify-between mt-2">
        {listEmojis.map((item) => (
          <EmojiBtn
            key={item.name}
            symbol={item.symbol}
            clickHandler={emojiHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Options;
