import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as HomePageIcon } from "../../../assets/homepage.svg";
import s from "./notFound.module.scss";

export const NotFound = () => {
  let navigate = useNavigate();

  return (
    <div className={s.error}>
      <p className={s.errorText}>Page doesn't exist!</p>
      <Link
        onClick={() => navigate("/", { replace: true })}
        className={s.errorLink}
        to="/"
      >
        <p>Back to main page</p>{" "}
        <HomePageIcon style={{ fill: "white", height: 40, marginTop: 5 }} />
      </Link>
    </div>
  );
};
