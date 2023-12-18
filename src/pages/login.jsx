import AuthLayout from "../components/Layout/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="mt-5 text-center">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-500 font-bold">
          Sign Up
        </a>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
