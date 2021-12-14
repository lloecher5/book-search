import "./style.css";
import Header from "../../sectioning/header/header";
import { connect } from "react-redux";
import { useState } from "react";
import addNewFriends from "../../redux/actions/getNewFriends";

function Redux({ friends, addNewFriends }) {
  const [newFriend, setNewFriend] = useState("");
  const amigos = friends.map((friend, index) => {
    return <li key={index}> {friend}</li>;
  });

  const handleClick = () => {
    addNewFriends(newFriend);
    setNewFriend("");
  };
  const handleChange = (e) => {
    setNewFriend(e.target.value);
  };
  return (
    <div>
      <Header />
      <ul>{amigos}</ul>
      <input onChange={handleChange} type="text" value={newFriend} />
      <button onClick={handleClick}>Get New friends</button>
    </div>
  );
}

const mapDispatchToProps = {
  addNewFriends,
};

const mapStateToProps = (state) => ({
  friends: state.friends,
});

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
