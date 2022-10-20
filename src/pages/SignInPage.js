import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import { Button, ButtonGoogle } from "components/button";
import FormGroup from "components/common/FormGroup";
import { IconEyeToggle } from "components/icons";
import { useToggle } from "hooks/useToggle";
import { login } from "modules/auth/userSlice";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Input } from "../components/input";
import { Label } from "../components/label";
import LayoutAuthentication from "../layouts/LayoutAuthentication";

const SignInPage = () => {
  const dispatch = useDispatch();
 
  const { toggle: isShowPassword, handleToggle: handleShowPassword } =
    useToggle();
  const schema = yup.object({
    email: yup.string().email("").required("This is field is required"),
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

  const handleSignIn = async(values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
    } catch (error) {
      console.log("Failed to register", error);
    }
  };
  return (
    <LayoutAuthentication heading="Wellcome Back!">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8 ">
        Dont't have an account?{" "}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign up with google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
            placeholder="Enter password"
            type={`${!isShowPassword ? "password" : "text"}`}
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={isShowPassword}
              onClick={handleShowPassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right cursor-pointer">
            <span className="inline-block text-sm font-medium cur text-primary">
              Forgot password?
            </span>
          </div>
        </FormGroup>
        <Button type="submit" className="w-full " kind="primary">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
