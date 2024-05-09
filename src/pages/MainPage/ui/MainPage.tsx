import { classNames } from "utils/classNames";
import cls from "./MainPage.module.scss";

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => (
  <div className={classNames(cls.MainPage, {}, [className])}>
    hello and Welcome to the club !{" "}
  </div>
);
