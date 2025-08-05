import "../componentsStyle/Header.css"
import Button from "./Button";

const Header = ({ Header_L, Header_M, Header_R }) => {


	
  return (
    <div className="Header">
      <div className="Header_Left">{Header_L}</div>
      <div className="Header_Mid">{Header_M}</div>
      <div className="Header_Right">{Header_R}</div>
    </div>
  );
};
export default Header;