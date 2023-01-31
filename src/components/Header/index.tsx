import { useEffect, useState, FC } from "react";
import { MobileHeader } from "./MobileHeder";
import { LaptopHeader } from "./LaptopHeader";

import s from "./header.module.scss";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Header: FC = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width && width < 830) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, [width]);

  return (
    <header className={s.wrapper}>
      {smallScreen ? <MobileHeader /> : <LaptopHeader />}
    </header>
  );
};
