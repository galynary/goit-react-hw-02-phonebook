import React from 'react';
import PropTypes from 'prop-types';
import { FilterWrapper, Label, Input } from './Filter.styled';

export function Filter({ value, onChange }) {
  return (
    <FilterWrapper>
      <Label>
        Find name
        <Input type="text" value={value} onChange={onChange} placeholder=" " />
      </Label>
    </FilterWrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
