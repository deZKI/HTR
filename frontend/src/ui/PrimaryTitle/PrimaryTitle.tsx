import {FC} from "react";

type TProps = {
  text: string;
}

const PrimaryTitle: FC<TProps> = ({ text }) => {
  return (
    <h3 className="mb-6 text-2xl font-medium leading-[29px] uppercase text-black">
      {text}
    </h3>
  );
}

export default PrimaryTitle;