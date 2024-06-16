import React, { useState } from "react";
import { isNotEmpty, isValidEmail } from "../../utils/validator";
import Input from "../General/Input";
import logo from "../../assets/images/logo.png";

type SignupModalProps = {
  show: boolean;
  onClose: () => void;
};

const SignupModal: React.FC<SignupModalProps> = ({ show, onClose }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const validateForm = () => {
    let valid = true;
    let errors = {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      role: "",
    };

    if (!isNotEmpty(email)) {
      errors.email = "Email is required";
      valid = false;
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
      valid = false;
    }
    if (!isNotEmpty(fullName)) {
      errors.fullName = "Full name is required";
      valid = false;
    }
    if (!isNotEmpty(password)) {
      errors.password = "Password is required";
      valid = false;
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    alert("comming soon");
  };

  if (!show) {
    return <></>;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full mt-0 flex items-center justify-center">
      <div
        className="fixed left-0 top-0 w-screen h-screen bg-transparent"
        onClick={onClose}
      ></div>
      <div className="relative my-auto mx-auto px-5 py-10 border w-[520px] shadow-lg rounded-[14px] bg-white">
        <div className="mb-5 flex justify-center gap-4 items-center">
          <div className="">
            <img alt="" className="h-14 w-14" src={logo} />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Get Started Today
          </h2>
        </div>
        {error && error !== "" && (
          <div className="text-center text-red-500 text-bold">{error}</div>
        )}
        <form className="px-8 pt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              value={fullName}
              error={!!errors.fullName}
              placeholder="Full Name"
              handleChange={(e) => {
                setFullName(e.target.value);
                if (!isNotEmpty(e.target.value)) {
                  setErrors({ ...errors, fullName: "Full Name is required" });
                } else {
                  setErrors({ ...errors, fullName: "" });
                }
              }}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs">{errors.fullName}</p>
            )}
          </div>
          <div className="mb-4">
            <Input
              type="text"
              value={email}
              error={!!errors.email}
              placeholder="Email address"
              handleChange={(e) => {
                setEmail(e.target.value);
                if (!isNotEmpty(e.target.value)) {
                  setErrors({ ...errors, email: "Email is required" });
                } else if (!isValidEmail(e.target.value)) {
                  setErrors({ ...errors, email: "Invalid email format" });
                } else {
                  setErrors({ ...errors, email: "" });
                }
              }}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <Input
              type="password"
              value={password}
              placeholder="Password"
              error={!!errors.password}
              handleChange={(e) => {
                setPassword(e.target.value);
                let newPassword = "";
                if (!isNotEmpty(e.target.value)) {
                  newPassword = "Password is required";
                } else {
                  newPassword = "";
                }

                if (e.target.value !== confirmPassword) {
                  setErrors({
                    ...errors,
                    password: newPassword,
                    confirmPassword: "Passwords do not match",
                  });
                } else {
                  setErrors({
                    ...errors,
                    password: newPassword,
                    confirmPassword: "",
                  });
                }
              }}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <Input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              error={!!errors.confirmPassword}
              handleChange={(e) => {
                setConfirmPassword(e.target.value);
                if (password !== e.target.value) {
                  setErrors({
                    ...errors,
                    confirmPassword: "Passwords do not match",
                  });
                } else {
                  setErrors({ ...errors, confirmPassword: "" });
                }
              }}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-[24px] text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
            >
              Cancel
            </button>
            <button
              disabled={loading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-[24px] text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
