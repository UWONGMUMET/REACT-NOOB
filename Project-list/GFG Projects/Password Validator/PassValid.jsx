import React, { useState } from "react";
import validator from "validator";
import "../Password Validator/pv.css";

const PassValid = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validatePassword = (value) => {
    setPassword(value);
    const isValid = validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });

    setErrorMessage(isValid ? "Strong Password" : "Weak Password");
  };
  return (
    <div className="password-checker-container">
      <h2>Check Your Password Strength</h2>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => validatePassword(e.target.value)}
      />
      {errorMessage && (
        <p className={errorMessage === "Strong Password" ? "success" : ""}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default PassValid;
