import React from 'react';
import styled from 'styled-components';

export function Switch1({ state, setState }) {
  return (
    <StyledWrapper>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={state}
        onClick={setState}
      />
      <label className="switch" htmlFor="checkbox">
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 51px;
  height: 31px;
  position: relative;

  .checkbox {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  .switch {
    width: 100%;
    height: 100%;
    display: block;
    background-color: #e9e9eb;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  .slider {
    width: 27px;
    height: 27px;
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15),
      0px 3px 1px rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease-out;
    cursor: pointer;
  }

  .checkbox:checked + .switch {
    background-color: #34c759;
  }

  .checkbox:checked + .switch .slider {
    transform: translateX(20px);
  }
`;
