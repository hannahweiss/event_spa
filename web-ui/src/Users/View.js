import { get_user_by_id } from "../api";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserView() {
  const [user, setUser] = useState({});

  let { id } = useParams();

  useEffect(() => {
    findUserById(id);
  }, []);

  function findUserById(id){
      setUser(get_user_by_id(id))
  }

  console.log("User");
  console.log(user);

  console.log(id);
  return <div>{user.id}</div>;
}

function state2props() {
  return {};
}
export default connect(state2props)(UserView);
