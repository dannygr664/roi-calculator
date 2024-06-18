import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./CustomSelect.css";

function CustomSelect({ options, selectedOption, setSelectedOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`custom-select-wrapper ${isOpen ? "open" : ""}`}
      ref={wrapperRef}
    >
      <div className="custom-select" onClick={() => setIsOpen(!isOpen)}>
        {!selectedOption ? "Select" : selectedOption}
      </div>
      {isOpen && (
        <div className="custom-options">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="custom-option"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
};

export default CustomSelect;
