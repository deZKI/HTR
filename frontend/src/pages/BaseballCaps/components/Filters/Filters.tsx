import {FC, useState} from "react";
import {setForm, setBrand, setColor, setLeague, setCollection,} from "@/pages/BaseballCaps/components/Filters/filters.ts";
import DropdownButton from "@/ui/DropdownButton/DropdownButton.tsx";
import DropdownList from "@/ui/DropdownList/DropdownList.tsx";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import Dropdown from "@/ui/Dropdown/Dropdown.tsx";
import {RootState} from "@/store/store.ts";
import {useSelector} from "react-redux";
import ChosenFilterButton from "@/ui/ChosenFilterButton/ChosenFilterButton.tsx";

const Filters: FC = () => {
  const form = useSelector((state: RootState) => state.filters.form);
  const brand = useSelector((state: RootState) => state.filters.brand);
  const color = useSelector((state: RootState) => state.filters.color);
  const league = useSelector((state: RootState) => state.filters.league);
  const collection = useSelector((state: RootState) => state.filters.collection);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

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
            switcher={openDropdown === 'Форма'}
            setSwitcher={() => toggleDropdown('Форма')}
            button={
              <DropdownButton
                text="Форма"
                containerClass="flex justify-center items-center gap-4 px-4 py-4 border border-solid border-[#969696] text-sm font-medium leading-[17px] text-black"
                selectedType={form}
              />
            }
            containerClass="relative"
            buttonWrapperClass="cursor-pointer"
            dropdownWrapperClass="absolute w-full"
            dropdownOverlayClass="bg-white border shadow-lg"
          >
            <DropdownList
              isOpen={openDropdown === 'Форма'}
              items={items}
              selectedType={form}
              setIsOpen={() => toggleDropdown('Форма')}
              setSelectedType={(value: string | null) => dispatch(setForm(value))}
              containerClass="bg-white rounded shadow"
              listClass="flex flex-col"
              itemClass="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            />
          </Dropdown>
          <Dropdown
            switcher={openDropdown === 'Бренд'}
            setSwitcher={() => toggleDropdown('Бренд')}
            button={
              <DropdownButton
                text="Бренд"
                containerClass="flex justify-center items-center gap-4 px-4 py-4 border border-solid border-[#969696] text-sm font-medium leading-[17px] text-black"
                selectedType={brand}
              />
            }
            containerClass="relative"
            buttonWrapperClass="cursor-pointer"
            dropdownWrapperClass="absolute w-full"
            dropdownOverlayClass="bg-white border shadow-lg"
          >
            <DropdownList
              isOpen={openDropdown === 'Бренд'}
              items={items}
              selectedType={brand}
              setIsOpen={() => toggleDropdown('Бренд')}
              setSelectedType={(value: string | null) => dispatch(setBrand(value))}
              containerClass="bg-white rounded shadow"
              listClass="flex flex-col"
              itemClass="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            />
          </Dropdown>
          <Dropdown
            switcher={openDropdown === 'Цвет'}
            setSwitcher={() => toggleDropdown('Цвет')}
            button={
              <DropdownButton
                text="Цвет"
                containerClass="flex justify-center items-center gap-4 px-4 py-4 border border-solid border-[#969696] text-sm font-medium leading-[17px] text-black"
                selectedType={color}
              />
            }
            containerClass="relative"
            buttonWrapperClass="cursor-pointer"
            dropdownWrapperClass="absolute w-full"
            dropdownOverlayClass="bg-white border shadow-lg"
          >
            <DropdownList
              isOpen={openDropdown === 'Цвет'}
              items={items}
              selectedType={color}
              setIsOpen={() => toggleDropdown('Цвет')}
              setSelectedType={(value: string | null) => dispatch(setColor(value))}
              containerClass="bg-white rounded shadow"
              listClass="flex flex-col"
              itemClass="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            />
          </Dropdown>
          <Dropdown
            switcher={openDropdown === 'Лига и команда'}
            setSwitcher={() => toggleDropdown('Лига и команда')}
            button={
              <DropdownButton
                text="Лига и команда"
                containerClass="flex justify-center items-center gap-4 px-4 py-4 border border-solid border-[#969696] text-sm font-medium leading-[17px] text-black"
                selectedType={league}
              />
            }
            containerClass="relative"
            buttonWrapperClass="cursor-pointer"
            dropdownWrapperClass="absolute w-full"
            dropdownOverlayClass="bg-white border shadow-lg"
          >
            <DropdownList
              isOpen={openDropdown === 'Лига и команда'}
              items={items}
              selectedType={league}
              setIsOpen={() => toggleDropdown('Лига и команда')}
              setSelectedType={(value: string | null) => dispatch(setLeague(value))}
              containerClass="bg-white rounded shadow"
              listClass="flex flex-col"
              itemClass="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            />
          </Dropdown>
          <Dropdown
            switcher={openDropdown === 'Коллекция'}
            setSwitcher={() => toggleDropdown('Коллекция')}
            button={
              <DropdownButton
                text="Коллекция"
                containerClass="flex justify-center items-center gap-4 px-4 py-4 border border-solid border-[#969696] text-sm font-medium leading-[17px] text-black"
                selectedType={collection}
              />
            }
            containerClass="relative"
            buttonWrapperClass="cursor-pointer"
            dropdownWrapperClass="absolute w-full"
            dropdownOverlayClass="bg-white border shadow-lg"
          >
            <DropdownList
              isOpen={openDropdown === 'Коллекция'}
              items={items}
              selectedType={collection}
              setIsOpen={() => toggleDropdown('Коллекция')}
              setSelectedType={(value: string | null) => dispatch(setCollection(value))}
              containerClass="bg-white rounded shadow"
              listClass="flex flex-col"
              itemClass="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            />
          </Dropdown>
          <Dropdown
            switcher={openDropdown === 'Сортировка'}
            setSwitcher={() => toggleDropdown('Сортировка')}
            button={
              <DropdownButton
                text="Сортировка"
                containerClass="flex justify-center items-center gap-4 px-4 py-4 text-sm font-medium leading-[17px] text-black bg-[#D9D9D9]"
                selectedType={null}
              />
            }
            containerClass="relative ml-auto"
            buttonWrapperClass="cursor-pointer"
            dropdownWrapperClass="absolute w-full"
            dropdownOverlayClass="bg-white border shadow-lg"
          >
            <DropdownList
              isOpen={openDropdown === 'Сортировка'}
              items={items}
              selectedType={null}
              setIsOpen={() => toggleDropdown('Сортировка')}
              setSelectedType={() => {}}
              containerClass="bg-white rounded shadow"
              listClass="flex flex-col"
              itemClass="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            />
          </Dropdown>
        </div>
        <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
        <div className="flex gap-6">
          <ul className="flex items-center gap-6">
            {Array.from(Array(4).keys()).map(() =>
              <ChosenFilterButton
                text="New Era"
                containerClass="flex justify-center items-center gap-4 px-4 py-4 text-sm font-medium leading-[17px] text-black bg-[#D9D9D9]"
              />
            )}
          </ul>
          <button className="flex justify-center items-center text-sm font-medium leading-[17px] text-[#969696] underline">
            Сбросить фильтр
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filters;