import {FC} from "react";
import {EDirections} from "@/definitions/enums/EDirections.ts";

type TProps = {
  direction: EDirections;
  onClick: (direction: EDirections) => void;
};

const SliderButton: FC<TProps> = ({ direction, onClick }) => {
  const isLeft = direction === EDirections.left;

  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? "left-[-20px]" : "right-[-20px]"} z-10 flex justify-center items-center w-10 h-10 border border-solid border-[#969696] rounded-full bg-white`}
      aria-label={isLeft ? "Scroll left" : "Scroll right"}
      onClick={() => onClick(direction)}
    >
      {isLeft
        ? <svg className="flex justify-center items-center" width="9.292969" height="16.591515" viewBox="0 0 9.29297 16.5915" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.29 15.58L1 8.29L8.29 1" stroke="#000000" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        : <svg className="flex justify-center items-center rotate-180" width="9.292969" height="16.591515" viewBox="0 0 9.29297 16.5915" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.29 15.58L1 8.29L8.29 1" stroke="#000000" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
      }
    </button>
  );
};

export default SliderButton;