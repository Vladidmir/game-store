import { FC } from "react";
import errorGif from "./error.gif";
import s from "./errorMessage.module.scss";
interface ITextError {
  textError?: string;
}
export const ErrorMessage: FC<ITextError> = ({ textError }) => {
  return (
    <div className={s.error}>
      <img className={s.errorGif} src={errorGif} alt="Error" />;
      <h3 className={s.errorText}>{textError}</h3>
    </div>
  );
};
