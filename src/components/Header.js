import Button from "./Button";

function Header({ title, toggleForm, displayForm }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={toggleForm}
        btnText={displayForm ? "-" : "+"}
        color={displayForm ? "red" : "green"}
      />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
