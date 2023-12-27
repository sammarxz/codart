import { ReactNode, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { ChevronUp } from "lucide-react";

interface SelectProps {
  icon: ReactNode;
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

export function Select({
  icon,
  options,
  selectedOption,
  onSelect,
}: SelectProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionChange = (newOption: string) => {
    onSelect(newOption);
    setShowDropdown(false);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setShowDropdown(false);
      }}
    >
      <div
        onClick={toggleDropdown}
        className="w-[160px] relative border border-white/20 rounded 
        flex items-center hover:text-gray-50 transition-all duration-300
        ease-in-out cursor-pointer hover:border-white/40 text-xs"
      >
        <div className="w-8 h-8 border-r border-white/20 flex items-center justify-center">
          {icon}
        </div>
        <div className="px-2 flex-1 select-none capitalize flex items-center justify-between">
          {selectedOption} <ChevronUp size={18} />
        </div>

        {showDropdown ? (
          <ul
            role="listbox"
            aria-expanded={showDropdown}
            className="z-50 py-2 px-3 absolute left-8 right-0 bottom-9 bg-[#191919] 
            border border-white/20 text-gray-400 rounded flex flex-col 
            hover:border-white/40 transition-all duration-300"
          >
            {options.sort().map((option) => (
              <button
                key={option}
                onClick={() => handleOptionChange(option)}
                className={`capitalize text-left hover:text-gray-50 
                transition-all duration-300 ease-in-out py-1 ${
                  option === selectedOption && "text-gray-50"
                }`}
              >
                {option}
              </button>
            ))}
          </ul>
        ) : null}
      </div>
    </OutsideClickHandler>
  );
}
