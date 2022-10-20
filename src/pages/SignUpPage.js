import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import { Button, ButtonGoogle } from "components/button";
import { Checkbox } from "components/checkbox";
import FormGroup from "components/common/FormGroup";
import { IconEyeToggle } from "components/icons";
import { useToggle } from "hooks/useToggle";
import { register } from "modules/auth/userSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Input } from "../components/input";
import { Label } from "../components/label";
import LayoutAuthentication from "../layouts/LayoutAuthentication";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const loggedInUser=useSelector((state)=>state)
console.log(loggedInUser);
  const [first, setfirst] = useState("second")
  const navigate = useNavigate();
  useEffect(() => {
   
   
  }, [loggedInUser])
  
  
  console.log(loggedInUser);
  const { toggle: acceptTerm, handleToggle: handleToggleTerm } = useToggle();
  const { toggle: isShowPassword, handleToggle: handleShowPassword } =
    useToggle();
  const schema = yup.object({
    username: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("This is field is required"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password must be 8 character"),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const handleSignUp = async (values) => {
    try {
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
    } catch (error) {
      console.log("Failed to register", error);
    }
  };

  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8 ">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <p className="mb-4 text-xs font-normal text-center dark:text-white lg:text-sm text-text2 lg:mb-8">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label>Full Name *</Label>
          <Input
            control={control}
            name="username"
            placeholder="Jonh Doe"
            error={errors.username?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email *</Label>
          <Input
            control={control}
            name="email"
            placeholder="abc@gmail.com"
            type="email"
            error={errors.email?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password *</Label>
          <Input
            control={control}
            name="password"
            placeholder="Create a password"
            type={`${!isShowPassword ? "password" : "text"}`}
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={isShowPassword}
              onClick={handleShowPassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start mb-8 gap-x-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="flex-1 text-sm text-text1 dark:text-text3">
              I agree to the{" "}
              <span className="underline text-secondary">Term of Use</span> and
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy.</span>.
            </p>
          </Checkbox>
        </div>

        <Button type="submit"  className="w-full " kind="primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
