import {useParams} from "react-router-dom";

const Diary = () => {
	const params = useParams();
	console.log(params);
  return(
		<div>
		 url = Diary{params.id}
		</div>
	);
};

export default Diary;
