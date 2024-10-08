import React from "react";
import styles from "./styles.module.css";

interface SelectComponentProps {
  modelValue: string;
  items: string[];
  onUpdate: (value: string) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  modelValue,
  items,
  onUpdate,
}) => {
  const updateValue = (value: string) => {
    onUpdate(value);
  };

  return (
    <div>
      <select
        className={styles.select}
        value={modelValue}
        onChange={(e) => updateValue(e.target.value)}
      >
        <option value="" disabled>
          Tasks
        </option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
