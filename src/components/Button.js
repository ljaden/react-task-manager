function Button({ color, btnText, onClick }) {
  return (
    <div>
      <button
        className="btn"
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        {btnText}
      </button>
    </div>
  );
}

Button.defaultProps = {
  color: "green",
  btnText: "Add",
};

export default Button;
