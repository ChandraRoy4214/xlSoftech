import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided) => ({
    ...provided,
    height: 44,
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: '250px', // your desired height
  }),

  singleValue: (provided) => {
    const transition = '300ms';

    return { ...provided, transition };
  },
};

function DropDown({
  value,
  setValue,
  heading,
  options,
  width,
  clearable,
  warning,
  component,
}) {
  return (
    <div className={`w-full font-primary`}>
      <p className='mb-1 pl-1 text-sm capitalize text-dark-blue font-semibold flex gap-2'>
        {component && <span className='text-xl'>{component} </span>}
        {heading}
      </p>
      <div
        className={`w-full ${
          warning && 'border border-custom-red rounded-md  '
        }`}
      >
        <Select
          isSearchable={true}
          isClearable={clearable}
          instanceId={'ddComponent'}
          styles={customStyles}
          options={options}
          value={value || ''}
          onChange={(e) => {
            setValue(e);
          }}
          placeholder={value}
        />
      </div>
    </div>
  );
}

export default DropDown;
