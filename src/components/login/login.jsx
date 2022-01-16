import React from "react";

export const Login = () => {
  const onSubmit = () => {
    console.log("works");
  };

  const Input = (type, name, placeholder) => {
    return (
      <div className="Input">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required
          autocomplete="false"
        />
        <label for={name}></label>
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={() => onSubmit()}>
        <Input type="text" name="username" placeholder="username" />
        <Input type="password" name="password" placeholder="password" />
        <button> Sign In</button>
      </form>
      {/* <a href="#">Lost your password ?</a> */}
    </div>
  );
};
