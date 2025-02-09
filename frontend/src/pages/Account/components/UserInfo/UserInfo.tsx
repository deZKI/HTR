import {FC} from "react";

const UserInfo: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="m-0 text-[32px] font-bold leading-10 text-black">Иван Иванов</h2>
      <div className="flex items-center">
        <span className="flex justify-center items-center gap-2 p-2">
          <svg width="23.500000" height="23.500000" viewBox="0 0 23.5 23.5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Icon" d="M10.64 3.46L3.33 3.46C2.78 3.46 2.25 3.68 1.86 4.07C1.47 4.46 1.25 4.99 1.25 5.55L1.25 20.16C1.25 20.71 1.47 21.24 1.86 21.63C2.25 22.03 2.78 22.25 3.33 22.25L17.94 22.25C18.5 22.25 19.03 22.03 19.42 21.63C19.81 21.24 20.03 20.71 20.03 20.16L20.03 12.85M20.03 1.25C20.62 1.25 21.18 1.48 21.6 1.89C22.01 2.31 22.25 2.87 22.25 3.46C22.25 4.05 22.01 4.61 21.6 5.02L11.68 14.94L7.51 15.98L8.55 11.81L18.47 1.89C18.88 1.48 19.44 1.25 20.03 1.25Z" stroke="#363636" strokeOpacity="1.000000" strokeWidth="2.500000" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </span>
        <span className="text-base font-medium leading-5 text-[#363636]">г. Москва, ул. Тверская, д.5</span>
      </div>
    </div>
  );
}

export default UserInfo;