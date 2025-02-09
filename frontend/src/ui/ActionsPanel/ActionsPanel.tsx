import {FC} from "react";
import {Link} from "react-router-dom";

const ActionsPanel: FC = () => {
  return (
    <aside className="flex flex-col flex-grow-1 border-r border-solid border-r-[#969696] w-full max-w-[256px] h-full max-h-[264px]">
      <Link className="flex items-center gap-6 py-1 h-12" to="/account/orders" >
        <span className="flex justify-center items-center">
          <svg width="20.000000" height="22.077950" viewBox="0 0 20 22.0779" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path id="Icon" d="M19 6.99C19 6.64 18.9 6.3 18.73 5.99C18.55 5.69 18.3 5.44 18 5.26L11 1.26C10.69 1.09 10.35 1 10 1C9.64 1 9.3 1.09 9 1.26L2 5.26C1.69 5.44 1.44 5.69 1.26 5.99C1.09 6.3 1 6.64 1 6.99L1 14.99C1 15.34 1.09 15.69 1.26 15.99C1.44 16.3 1.69 16.55 2 16.72L9 20.72C9.3 20.9 9.64 20.99 10 20.99C10.35 20.99 10.69 20.9 11 20.72L18 16.72C18.3 16.55 18.55 16.3 18.73 15.99C18.9 15.69 19 15.34 19 14.99L19 6.99ZM1.26 5.95L10 11L18.73 5.95M10 21.07L10 10.99" stroke="#000000" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinejoin="round" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="text-base font-medium leading-5">Заказы</span>
      </Link>
      <Link className="flex items-center gap-6 py-1 h-12" to="/">
        <span className="flex justify-center items-center">
          <svg width="22.500000" height="20.643749" viewBox="0 0 22.5 20.6437" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
	          <path id="Vector" d="M11.36 17.49L11.25 17.6L11.12 17.49C5.78 12.64 2.25 9.43 2.25 6.18C2.25 3.93 3.93 2.25 6.18 2.25C7.91 2.25 9.6 3.37 10.2 4.9L12.29 4.9C12.89 3.37 14.58 2.25 16.31 2.25C18.56 2.25 20.25 3.93 20.25 6.18C20.25 9.43 16.71 12.64 11.36 17.49ZM16.31 0C14.35 0 12.47 0.91 11.25 2.33C10.02 0.91 8.14 0 6.18 0C2.72 0 0 2.71 0 6.18C0 10.42 3.82 13.9 9.61 19.15L11.25 20.64L12.88 19.15C18.67 13.9 22.5 10.42 22.5 6.18C22.5 2.71 19.77 0 16.31 0Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
          </svg>
        </span>
        <span className="text-base font-medium leading-5">Избранное</span>
      </Link>
      <Link className="flex items-center gap-6 py-1 h-12" to="/">
        <span className="flex justify-center items-center">
          <svg width="20.833984" height="20.833334" viewBox="0 0 20.834 20.8333" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path id="Vector" d="M16.66 16.66C15.5 16.66 14.58 17.59 14.58 18.75C14.58 19.3 14.8 19.83 15.19 20.22C15.58 20.61 16.11 20.83 16.66 20.83C17.21 20.83 17.75 20.61 18.14 20.22C18.53 19.83 18.75 19.3 18.75 18.75C18.75 17.59 17.81 16.66 16.66 16.66ZM0 0L0 2.08L2.08 2.08L5.83 9.98L4.41 12.54C4.25 12.83 4.16 13.17 4.16 13.54C4.16 14.09 4.38 14.62 4.77 15.01C5.16 15.4 5.69 15.62 6.25 15.62L18.75 15.62L18.75 13.54L6.68 13.54C6.61 13.54 6.55 13.51 6.5 13.46C6.45 13.41 6.42 13.35 6.42 13.28C6.42 13.22 6.43 13.18 6.45 13.15L7.39 11.45L15.15 11.45C15.93 11.45 16.62 11.02 16.97 10.38L20.7 3.64C20.78 3.47 20.83 3.3 20.83 3.12C20.83 2.84 20.72 2.58 20.52 2.38C20.33 2.19 20.06 2.08 19.79 2.08L4.38 2.08L3.4 0L0 0ZM6.25 16.66C5.09 16.66 4.16 17.59 4.16 18.75C4.16 19.3 4.38 19.83 4.77 20.22C5.16 20.61 5.69 20.83 6.25 20.83C6.8 20.83 7.33 20.61 7.72 20.22C8.11 19.83 8.33 19.3 8.33 18.75C8.33 17.59 7.39 16.66 6.25 16.66Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
          </svg>
        </span>
        <span className="text-base font-medium leading-5">Корзина</span>
      </Link>
      <Link className="flex items-center gap-6 py-1 h-12" to="/">
        <span className="flex justify-center items-center">
          <svg width="22.000000" height="18.000076" viewBox="0 0 22 18.0001" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path id="Vector" d="M21.93 1.63L18.61 16.91C18.36 17.99 17.71 18.25 16.78 17.75L11.72 14.11L9.28 16.4C9.01 16.66 8.79 16.88 8.26 16.88L8.63 11.86L18 3.59C18.41 3.24 17.91 3.04 17.37 3.4L5.78 10.52L0.79 8.99C-0.3 8.66 -0.32 7.94 1.02 7.43L20.53 0.09C21.44 -0.24 22.23 0.29 21.93 1.63Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
          </svg>
        </span>
        <span className="text-base font-medium leading-5">Служба поддержки</span>
      </Link>
      <Link className="flex items-center gap-6 py-1 h-12" to="/">
        <span className="flex justify-center items-center">
          <svg width="20.500000" height="20.500000" viewBox="0 0 20.5 20.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path id="Icon" d="M7.25 19.25L3.25 19.25C2.71 19.25 2.21 19.03 1.83 18.66C1.46 18.28 1.25 17.78 1.25 17.25L1.25 3.25C1.25 2.71 1.46 2.21 1.83 1.83C2.21 1.46 2.71 1.25 3.25 1.25L7.25 1.25M14.25 15.25L19.25 10.25L14.25 5.25M19.25 10.25L7.25 10.25" stroke="#000000" strokeOpacity="1.000000" strokeWidth="2.500000" strokeLinejoin="round" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="text-base font-medium leading-5">Выйти из аккаунта</span>
      </Link>
    </aside>
  );
}

export default ActionsPanel;