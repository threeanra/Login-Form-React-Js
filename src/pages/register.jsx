import AuthLayout from "../components/Layout/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="mt-5 text-center">
        Do you have an account?{" "}
        <a href="/login" className="text-blue-500 font-semibold">
          Sign In
        </a>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
