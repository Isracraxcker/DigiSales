import React from 'react';
import styled from 'styled-components';

export function Checkbox1({ isChecked, onChange }) {
  return (
    <StyledWrapper>
      <label className="checkbox-wrapper">
        <input
          type="checkbox"
          className="checkbox-input"
          checked={isChecked}
          onChange={onChange}
        />
        <span className="checkmark" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .checkbox-wrapper {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
  }

  .checkbox-input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  .checkmark {
    display: block;
    width: 30px;
    height: 30px;
    background-color: #ddd;
    border-radius: 8px;
    position: relative;
    transition: background-color 0.4s ease;
    cursor: pointer;
  }

  .checkmark::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 12px;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(40deg) scale(10);
    opacity: 0;
    transition: all 0.4s;
  }

  .checkbox-input:checked + .checkmark {
    background-color: #08bb68;
  }

  .checkbox-input:checked + .checkmark::after {
    opacity: 1;
    transform: translate(-50%, -50%) rotateZ(40deg) scale(1);
  }
`;
