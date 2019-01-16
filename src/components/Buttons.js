import React from "react";

const Buttons = props => {
  const { onDraw, onReset } = props;
  return (
    <div className="buttons col-sm-12 col-md-6">
      <div className="row justify-content-around">
        <button
          onClick={onDraw}
          type="button"
          className="my-btn btn btn-secondary col-6 col-md-5"
        >
          Draw cards
        </button>

        <button
          onClick={onReset}
          type="button"
          className="my-btn btn btn-secondary col-6 col-md-5"
        >
          Reset cards
        </button>
      </div>
    </div>
  );
};

export default Buttons;
