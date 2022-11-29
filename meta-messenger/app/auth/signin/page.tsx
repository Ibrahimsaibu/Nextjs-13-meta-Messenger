import { getProviders } from "next-auth/react";
import Image from "next/image";
import { SignInComponent } from "./signInComponent";

const SignIn = async () => {
  const providers = await getProviders();
  return (
    <div>
      <div className="grid justify-center">
        <Image
          className="rounded-full mx-2 object-cover"
          width={700}
          height={700}
          src="https://links.papareact.com/161"
          alt="messenger logo"
        />
      </div>
      <SignInComponent providers={providers} />
    </div>
  );
};

export default SignIn;
