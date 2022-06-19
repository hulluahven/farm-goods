import React from "react";
import Checkbox from "/src/components/ui/checkbox/checkbox";
import { Ul, Li } from "/src/components/styled";

function CheckboxList({
  selectedValues,
  labelComponent,
  options,
  name,
  onChange,
  isGridList,
  onClickLabel = () => {}
}) {
  const handleChange = (value) => {
    const newValue = [...selectedValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };
  return (
    <Ul $isGridList={isGridList}>
      {options.map((option, index) => (
        <Li key={option.value}>
          <Checkbox
            labelComponent={labelComponent}
            selectedValues={selectedValues}
            isChecked={selectedValues.includes(option.value)}
            name={name}
            value={option.value}
            text={option.title}
            onClick={(value) => onClickLabel(value, index)}
            onChange={handleChange}
          />
        </Li>
      ))}
    </Ul>
  );
}
export default CheckboxList;
