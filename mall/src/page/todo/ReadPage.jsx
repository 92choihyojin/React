import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../include/Header";
import {
  createSearchParams,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useCallback, useMemo } from "react";

const ReadPage = () => {
  const { tno } = useParams();
  const navigate = useNavigate();
  const [queryParam] = useSearchParams();
  const page = queryParam.get("page") ? parseInt(queryParam.get("page")) : 1;
  const size = queryParam.get("size") ? parseInt(queryParam.get("size")) : 10;
  const queryStr = useMemo(() => {
    return createSearchParams({ page, size }).toString();
  }, [page, size]);

  const moveToModify = useCallback(
    (tno) => {
      navigate({ pathname: `/todo/modify/${tno}`, search: queryStr });
    },
    [navigate, queryStr]
  );

  const moveToList = useCallback(() => {
    navigate({ pathname: `/todo/list`, search: queryStr });
  }, [page, size]);

  return (
    <Container>
      <Header />
      To do ReadPage {tno}
      <div class="d-grid gap-2 col-6 mx-auto">
        <button
          class="btn btn-outline-success"
          type="button"
          onClick={() => {
            moveToModify(tno);
          }}
        >
          Test Button Modify
        </button>
        <button
          class="btn btn-outline-danger"
          type="button"
          onClick={() => {
            moveToList();
          }}
        >
          Test Button List
        </button>
      </div>
			<ReadComponent tno={tno}/>
    </Container>
  );
};

export default ReadPage;
