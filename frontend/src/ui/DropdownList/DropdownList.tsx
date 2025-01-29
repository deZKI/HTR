import {FC} from "react";

type DropdownListItem = {
  label: string;
  value: string;
  className?: string;
};

type TProps = {
  selectedType: string | null;
  items: DropdownListItem[];
  isOpen: boolean;
  setSelectedType: (type: string | null) => void;
  setIsOpen: (isOpen: boolean) => void;
  containerClass?: string;
  listClass?: string;
  itemClass?: string;
};

const DropdownList: FC<TProps> = ({
  selectedType,
  items,
  isOpen,
  setSelectedType,
  setIsOpen,
  containerClass = "",
  listClass = "",
  itemClass = "",
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
            key={item.value}
            className={`${itemClass} ${selectedType === item.value ? "bg-gray-200" : ""}`}
            onClick={() => handleItemClick(item.value)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;