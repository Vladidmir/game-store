import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as HomePageIcon } from "../../../assets/homepage.svg";
import s from "./notFound.module.scss";
import { ErrorMessage } from "components/UI/ErrorMesage";
export const NotFound = () => {
  let navigate = useNavigate();

  return (
    <div className={s.error}>
      <ErrorMessage textError={"Page doesn't exist!"} />
      <Link
        onClick={() => navigate("/", { replace: true })}
        className={s.errorLink}
        to="/"
      >
        <p>Back to main page</p>
        <HomePageIcon style={{ fill: "white", height: 40, marginTop: 20 }} />
      </Link>
    </div>
  );
};
