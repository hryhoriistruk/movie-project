import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moviesActions } from "../redux/slices/moviesSlice";


const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();



  useEffect(() => {
    if (id) {

    }
  }, [id]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>{"<- Back"}</button>
    </div>
  );
};

export default MoviePage;
