import dynamic from "next/dynamic";

export const metadata = {
  title: "Travel Blog Next - Login Page",
  description:
    "Welcome back! Login to your Travel Blog Next account and add new travel inspitation.",
};

const LoginComponent = dynamic(() => import("../components/login/login"));

export default function Login() {
  return <LoginComponent />;
}
