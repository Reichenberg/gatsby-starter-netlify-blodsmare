import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

const InputStyled = styled.div`
  position: relative;
  margin-top: 15px;
  background-color: #ffffff;
  height: 50px;

  input {
    border: none;
    border-radius: 2px;
    height: 50px;
    width: 100%;
    padding-left: 15px;
    box-sizing: border-box;
    color: #000;
    font-family: montserrat, sans-serif;

    font-size: 16px;
    -webkit-appearance: none;
  }

  label {
    position: absolute;
    top: 15px;
    left: 15px;
    color: #3f464a;
    font-family: montserrat, sans-serif;

    font-size: 18px;
  }
`;

const labelVariants = {
  notEmpty: { top: 3, left: 5, fontSize: 12 },
  empty: { top: 15, left: 15, fontSize: 18 }
};

function FormInput({ type, name, onBlur, required, label, value }) {
  const [selected, setSelected] = useState(false);
  const [hasValue, setHasValue] = useState(value ? true : false);
  return (
    <InputStyled>
      <motion.label
        htmlFor={name}
        animate={hasValue || selected ? "notEmpty" : "empty"}
        variants={labelVariants}
      >
        {label}
      </motion.label>
      <motion.input
        onBlur={e => {
          onBlur(e);
          setSelected(false);
          setHasValue(e.target.value ? true : false);
        }}
        type={type}
        name={name}
        id={name}
        required={required}
        value={value}
        onFocus={() => setSelected(true)}
      ></motion.input>
    </InputStyled>
  );
}

FormInput.propTypes = {};

export default FormInput;
