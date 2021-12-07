import "./style.css";
import Header from "../../sectioning/header/header";
import { connect } from "react-redux";
import getNewFriends from "../../redux/actions/getNewFriends";

function Redux({ friends, getNewFriends }) {
  const amigos = friends.map((friend, index) => {
    return <li key={index}> {friend}</li>;
  });

  const handleClick = () => {
    getNewFriends();
  };
  return (
    <div>
      <Header />I am redux
      <ul>{amigos}</ul>
      <button onClick={handleClick}>Get New friends</button>
    </div>
  );
}

const mapDispatchToProps = {
  getNewFriends,
};

const mapStateToProps = (state) => ({
  friends: state.friends,
});

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
