import {FC} from "react";
import type {TDropdownListItem} from "@/definitions/types/TDropdownListItem.ts";

type TProps = {
  isOpen: boolean;
  items: TDropdownListItem[];
  selectedType: string | null;
  listClass?: string;
  itemClass?: string;
  containerClass?: string;
  setIsOpen: (isOpen: boolean) => void;
  setSelectedType: (type: string | null) => void;
};

const DropdownList: FC<TProps> = ({
  isOpen,
  items,
  selectedType,
  listClass = "",
  itemClass = "",
  containerClass = "",
  setIsOpen,
  setSelectedType,
}) => {
  const handleItemClick = (value: string) => {
    if (isOpen) {
      if (selectedType === value) {
        setIsOpen(false);
        setSelectedType(null);
      } else {
        setSelectedType(value);
      }
    } else {
      setIsOpen(true);
      setSelectedType(value);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={containerClass}>
      <ul className={listClass}>
        {items.map((item) => (
          <li
            className={`${itemClass} ${selectedType === item.value ? "bg-gray-200" : ""}`}
            onClick={() => handleItemClick(item.value)}
            key={item.value}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;