import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Edit from "./Edit";
import Header from "../components/Header";
import Editor from "../components/Editor";

const New = () => {
  const [SearchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
  // URL에서 'name' 파라미터 값 읽기
  const updateNameParam = (newName) => {
    setSearchParams({ name: newName });
  };

	  const onClickButtonHome = () => {
      navigate("/");
    };

  return (
    <div>
      <Header Header_L={<button onClick={onClickButtonHome}> &lt; </button>} />
      <Editor />

      {/*<button onClick={() => updateNameParam("TEST1")}>TEST Button 1</button>*/}
    </div>
  );
};
export default New;
