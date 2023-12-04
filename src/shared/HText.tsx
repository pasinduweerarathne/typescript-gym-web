import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <div className="basis-3/5 font-montserrat text-3xl font-bold">
      {children}
    </div>
  );
};

export default HText;
