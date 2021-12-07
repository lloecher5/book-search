import "./style.css";
import Header from "../../sectioning/header/header";
import { connect } from "react-redux";

function Redux({ friends }) {
  const amigos = friends.map((friend, index) => {
    return <li key={index}> {friend}</li>;
  });
  return (
    <div>
      <Header />I am redux
      <ul>{amigos}</ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  friends: state.friends,
});

export default connect(mapStateToProps)(Redux);
