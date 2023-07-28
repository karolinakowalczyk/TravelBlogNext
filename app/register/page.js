import dynamic from "next/dynamic";

export const metadata = {
  title: "Travel Blog Flask - Register Page",
  description:
    "Are you new? Create an account and share your travel inspitations!",
};

const RegisterComponent = dynamic(() =>
  import("../components/register/register")
);

export default function Register() {
  return <RegisterComponent />;
}
