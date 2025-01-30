import {FC} from "react";

type TProps = {
  text: string;
  containerClass?: string;
}

const ChosenFilterButton: FC<TProps> = ({text, containerClass}) => {
  return (
    <li className={containerClass}>
      <span>{text}</span>
      <button>
        <svg width="17.007812" height="17.008179" viewBox="0 0 17.0078 17.0082" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path id="Vector 1304" d="M16 1L1 16" stroke="#000000" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinecap="round"/>
          <path id="Vector 1304" d="M1 1L16 16" stroke="#000000" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinecap="round"/>
        </svg>
      </button>
    </li>
  );
}

export default ChosenFilterButton;