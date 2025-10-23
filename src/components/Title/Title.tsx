import type { FC, HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLTitleElement> {
  className: string;
}

const Title: FC<TitleProps> = ({ children, className }) => {
  return <h2 className={className}>{children}</h2>;
};

export default Title;
