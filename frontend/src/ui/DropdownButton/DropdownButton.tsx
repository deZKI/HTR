import {FC} from "react";

type TProps = {
  text: string;
  containerClass?: string;
  selectedType: string | null;
}

const DropdownButton: FC<TProps> = ({ text, containerClass, selectedType }) => {
  return (
    <button className={containerClass}>
      <span>{text}</span>
      <span>
        {selectedType
          ? <span>
              <svg width="16.589844" height="9.295758" viewBox="0 0 16.5898 9.29576" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path id="Vector 42" d="M1 1L8.29 8.29L15.58 1" stroke="#000000" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinejoin="round" strokeLinecap="round"/>
              </svg>
            </span>
          : <span>
              <svg width="16.589844" height="9.295758" viewBox="0 0 16.5898 9.29576" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path id="Vector 42" d="M1 1L8.29 8.29L15.58 1" stroke="#000000" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinejoin="round" strokeLinecap="round"/>
              </svg>
            </span>
        }
      </span>
    </button>
  );
}

export default DropdownButton;