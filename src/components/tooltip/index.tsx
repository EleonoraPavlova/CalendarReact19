import { ReactElement } from "react";

type Props = {
  message: string;
};

const Tooltip = ({ message }: Props): ReactElement => {
  return (
    <div className="fixed top-4 right-7 bg-[#43425d] text-white text-[15px] rounded-md p-5 shadow-lg animate-fade">
      {message}
    </div>
  );
};

export default Tooltip;
