import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { SetPopupContext } from "../App";

const Logout = () => {
  const setPopup = useContext(SetPopupContext);

  // Remove the token and type directly without useEffect
  localStorage.removeItem("token");
  localStorage.removeItem("type");
  setPopup({
    open: true,
    severity: "success",
    message: "Logged out successfully",
  });

  return <Redirect to="/login" />;
};

export default Logout;
