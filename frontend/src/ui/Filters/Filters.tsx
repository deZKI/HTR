import {FC, useState} from "react";
import DropdownList from "@/ui/DropdownList/DropdownList.tsx";
import Dropdown from "@/ui/Dropdown/Dropdown.tsx";
import DropdownButton from "@/ui/DropdownButton/DropdownButton.tsx";

const Filters: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const items = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6 mx-auto max-w-[1072px] px-8 pt-6">
        <div className="flex gap-4">
          <Dropdown
            switcher={isDropdownOpen}
            setSwitcher={setIsDropdownOpen}
            button={
              <DropdownButton
                text="Форма"
                containerClass="flex justify-center items-center gap-4 px-4 py-4 border-[1px] border-solid border-[#969696] text-sm font-medium leading-[17px] text-black"
                selectedType={selectedType}
              />
            }
            containerClass="relative"
            buttonWrapperClass="cursor-pointer"
            dropdownWrapperClass="absolute w-full"
            dropdownOverlayClass="bg-white border shadow-lg"
          >
            <DropdownList
              selectedType={selectedType}
              items={items}
              isOpen={isListOpen}
              setSelectedType={setSelectedType}
              setIsOpen={setIsListOpen}
              containerClass="bg-white rounded shadow"
              listClass="flex flex-col"
              itemClass="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            />
          </Dropdown>
          <Dropdown
            switcher={isDropdownOpen}
            setSwitcher={setIsDropdownOpen}
            button={
              <DropdownButton
                text="Бренд"
                containerClass="flex justify-center items-center gap-4 px-4 py-4 border-[1px] border-solid border-[#969696] text-sm font-medium leading-[17px] text-black"
                selectedType={selectedType}
              />
            }
            containerClass="relative"
            buttonWrapperClass="cursor-pointer"
            dropdownWrapperClass="absolute w-full"
            dropdownOverlayClass="bg-white border shadow-lg"
          >
            <DropdownList
              selectedType={selectedType}
              items={items}
              isOpen={isListOpen}
              setSelectedType={setSelectedType}
              setIsOpen={setIsListOpen}
              containerClass="bg-white rounded shadow"
              listClass="flex flex-col"
              itemClass="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            />
          </Dropdown>
          <Dropdown
            switcher={isDropdownOpen}
            setSwitcher={setIsDropdownOpen}
            button={
              <DropdownButton
                text="Цвет"
                containerClass="flex justify-center items-center gap-4 px-4 py-4 border-[1px] border-solid border-[#969696] text-sm font-medium leading-[17px] text-black"
                selectedType={selectedType}
              />
            }
            containerClass="relative"
            buttonWrapperClass="cursor-pointer"
            dropdownWrapperClass="absolute w-full"
            dropdownOverlayClass="bg-white border shadow-lg"
          >
            <DropdownList
              selectedType={selectedType}
              items={items}
              isOpen={isListOpen}
              setSelectedType={setSelectedType}
              setIsOpen={setIsListOpen}
              containerClass="bg-white rounded shadow"
              listClass="flex flex-col"
              itemClass="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            />
          </Dropdown>
          <Dropdown
            switcher={isDropdownOpen}
            setSwitcher={setIsDropdownOpen}
            button={
              <DropdownButton
                text="Лига и команда"
                containerClass="flex justify-center items-center gap-4 px-4 py-4 border-[1px] border-solid border-[#969696] text-sm font-medium leading-[17px] text-black"
                selectedType={selectedType}
              />
            }
            containerClass="relative"
            buttonWrapperClass="cursor-pointer"
            dropdownWrapperClass="absolute w-full"
            dropdownOverlayClass="bg-white border shadow-lg"
          >
            <DropdownList
              selectedType={selectedType}
              items={items}
              isOpen={isListOpen}
              setSelectedType={setSelectedType}
              setIsOpen={setIsListOpen}
              containerClass="bg-white rounded shadow"
              listClass="flex flex-col"
              itemClass="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            />
          </Dropdown>
          <Dropdown
            switcher={isDropdownOpen}
            setSwitcher={setIsDropdownOpen}
            button={
              <DropdownButton
                text="Коллекция"
                containerClass="flex justify-center items-center gap-4 px-4 py-4 border-[1px] border-solid border-[#969696] text-sm font-medium leading-[17px] text-black"
                selectedType={selectedType}
              />
            }
            containerClass="relative"
            buttonWrapperClass="cursor-pointer"
            dropdownWrapperClass="absolute w-full"
            dropdownOverlayClass="bg-white border shadow-lg"
          >
            <DropdownList
              selectedType={selectedType}
              items={items}
              isOpen={isListOpen}
              setSelectedType={setSelectedType}
              setIsOpen={setIsListOpen}
              containerClass="bg-white rounded shadow"
              listClass="flex flex-col"
              itemClass="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            />
          </Dropdown>
          <Dropdown
            switcher={isDropdownOpen}
            setSwitcher={setIsDropdownOpen}
            button={
              <DropdownButton
                text="Сортировка"
                containerClass="flex justify-center items-center gap-4 px-4 py-4 text-sm font-medium leading-[17px] text-black bg-[#D9D9D9]"
                selectedType={selectedType}
              />
            }
            containerClass="relative ml-auto"
            buttonWrapperClass="cursor-pointer"
            dropdownWrapperClass="absolute w-full"
            dropdownOverlayClass="bg-white border shadow-lg"
          >
            <DropdownList
              selectedType={selectedType}
              items={items}
              isOpen={isListOpen}
              setSelectedType={setSelectedType}
              setIsOpen={setIsListOpen}
              containerClass="bg-white rounded shadow"
              listClass="flex flex-col"
              itemClass="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            />
          </Dropdown>
        </div>
        <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
      </div>
    </section>
  );
}

export default Filters;