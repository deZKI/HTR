import {FC} from "react";

type TProps = {
  text: string;
}

const SecondaryTitle: FC<TProps> = ({ text }) => {
  return (
    <h3 className="mb-6 text-2xl font-medium leading-[29px] text-black">
      {text}
    </h3>
  );
}

export default SecondaryTitle;