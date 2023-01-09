import React from "react";

const EmojiBtn = ({ clickHandler, symbol }) => {
  return (
    <button onClick={() => clickHandler(symbol)} className="bg-orange-100">
      {symbol}
    </button>
  );
};

export default EmojiBtn;
