import { borderBottom } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CheckFormat } from "../../Utils/Auth/CheckFormtValue";
import "./authInput.css";
export default function AuthInput({
  textLabelInput,
  width,
  typeInput,
  isPassword,
  notCheckValue,
  handleChange,
  reduxHandleChange,
  disable,
  chechvalue,
  maxlength,
  classes,
  pressNumber,
  direction,
  wrapperClass,
  value,
  handleArrowPlan,
  targePlanArrow,
  workSpaceTypeState,
  errorTextId,
  infoStrongPass,
  checkStrongPass,
  ref


}) {
  // check email to be correct (Transfer to => Utils/Auth/CheckFormatValue) thanks Ariri for the create this function => ariri aswered : your welcome :)  
  // const validateEmail = (email) => {
  //   var re = /\S+@\S+\.\S+/;
  //   return re.test(email);
  // };
  // console.log(reduxHandleChange)

  const [isSeePssword, setSeePassword] = useState(typeInput);
  const [valueInput, setInputValue] = useState("");

  //redux options
  const dispatch = useDispatch()

  // to be just number when we type
  const pressNumberValue = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
  return (
    <>
      <div className={`input-wrapper ${wrapperClass}`}>
        <span className={`error_down_input ${errorTextId != undefined && errorTextId}`}>اطلاعات نامعتبر</span>
        <input
          type={isSeePssword}
          required
          maxLength={maxlength}
          onKeyPress={pressNumber && pressNumberValue}
          name={typeInput}
          ref={ref}
          disabled={disable}
          className={`${classes}  ${disable == true && " bg-[#D9D9D9] text-[#FCFCFB]"}`}
          value={value}
          dir="auto"
          style={{
            direction,
            width: `${width}`,
            pointerEvents: disable && "none",
            borderBottom: disable ? " 3px solid rgba(16, 204, 174, 1) !important" : chechvalue ? " 3px solid #cd0a0a" : "",
          }}
          onChange={(e) => {
            checkStrongPass!=undefined&&CheckFormat("password",e.target.value,errorTextId)
            handleArrowPlan != undefined && handleArrowPlan(e.target.value, targePlanArrow);
            handleChange != undefined && handleChange(e.target.value)
            setInputValue(e.target.value);
            workSpaceTypeState != undefined & reduxHandleChange != undefined ?
              dispatch(reduxHandleChange(e.target.value, workSpaceTypeState)) :
              reduxHandleChange != undefined && dispatch(reduxHandleChange(e.target.value))


          }}
        />

        <label className={disable ? "text-[#fff]" : ""} for="user">{textLabelInput}</label>
        {/* TODO: CHANGE INFO TEXT WITH STIKY NOTE IN OFFICE */}
        {infoStrongPass == true ? <span className={` info w-[200%] `}>با ترکیب علائم (!@#) و اعداد (1-9) و حروف انگلیسی (A-z) گذرواژه طولانی و مطمئن بسازید.</span> : null}
      </div>
    </>
  );
}
