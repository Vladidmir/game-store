import rainbowCat from "./cat.gif";
import s from "./noActionsGif.module.scss";
export const NoActionGif = () => (
  <div className={s.gif}>
    <img src={rainbowCat} alt="rainbow-cat" />
  </div>
);
