import { ReactElement } from "react";

type Props = {
  logoName: string;
};

const Logo = ({ logoName }: Props): ReactElement => {
  return (
    <div className="w-[260px] h-[70px] bg-[#3c3b53] text-white flex items-center pl-[20px]">
      <h2 className="text-bold text-[15px]">{logoName}</h2>
    </div>
  );
};

export default Logo;
