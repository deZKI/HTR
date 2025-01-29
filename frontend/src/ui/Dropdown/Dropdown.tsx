import {FC, ReactNode} from 'react';

type TProps = {
  button: ReactNode;
  children: ReactNode;
  switcher: boolean;
  setSwitcher: (dropdownSwitcher: boolean) => void;
  containerClass?: string;
  buttonWrapperClass?: string;
  dropdownWrapperClass?: string;
  dropdownOverlayClass?: string;
};

const Dropdown: FC<TProps> = ({
  button,
  children,
  switcher,
  setSwitcher,
  containerClass = '',
  buttonWrapperClass = '',
  dropdownWrapperClass = '',
  dropdownOverlayClass = '',
}) => {
  return (
    <div className={containerClass}>
      <div
        className={buttonWrapperClass}
        onClick={() => setSwitcher(!switcher)}
      >
        {button}
      </div>
      {switcher && (
        <div className={dropdownWrapperClass}>
          <div
            className={dropdownOverlayClass}
            onClick={() => setSwitcher(false)}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;