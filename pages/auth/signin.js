import React from "react";
import { getProviders, signIn as signIntoProvider } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <div className="bg-gray-50 h-screen ">
      <div className="grid xl:grid-cols-2 pt-[150px] xl:max-w-4xl mx-auto justify-center">
        <section className="col-span-1">
          <img alt="" className="h-[700px]" src="/images/login-banner.png" />
        </section>
        <section className="col-span-1">
          <>
            <div className="ml-4 bg-white border border-gray-200">
              <div className="p-14 items-center justify-center justify-items-center">
                <img className=" mb-10 mx-auto" src="/images/logo.png" />
                <input
                  className="h-13 p-3 mb-4 bg-gray-100 border border-gray-300 w-full"
                  placeholder={"Email address"}
                  type={"text"}
                ></input>
                <input
                  className="h-13 p-3 mb-4 bg-gray-100 border border-gray-300 w-full"
                  placeholder={"Password"}
                  type={"text"}
                ></input>
                <button
                  className="h-12 p-3 mb-4 font-semibold rounded-md text-white bg-blue-200 border border-blue-200 w-full"
                  type="button"
                >
                  Log In
                </button>

                <div className="flex justify-evenly">
                  <div className="h-[0.5px] w-full bg-gray-400 mt-2"></div>
                  <div className="ml-3 mr-3">OR</div>
                  <div className="h-[0.5px] w-full bg-gray-400 mt-2"></div>
                </div>
                {Object.values(providers).map((provider) => (
                  <div
                    key={provider.name}
                    className="flex items-center justify-center mt-4"
                  >
                    <img
                      className="h-5 mr-4"
                      src={"/images/" + provider.name + ".png"}
                    ></img>
                    <p
                      onClick={() => signIntoProvider(provider.id)}
                      className="cursor-pointer font-bold text-red-300"
                    >
                      Login with {provider.name}
                    </p>
                  </div>
                ))}

                <p className="grid place-items-center mt-4 text-gray-500 text-sm cursor-pointer">
                  Forgotten your password?
                </p>
              </div>
            </div>
            <div className="ml-4 mt-4 h-14 flex items-center justify-center bg-white border border-gray-200">
              <p>Don't have an Account?</p>
              <p className="font-bold text-blue-400 ml-2">Sign up</p>
            </div>
            <div className="mt-6">
              <p className="grid place-items-center mt-4 text-gray-800 text-md cursor-pointer">
                Get the app.
              </p>
              <div className="mt-5 flex items-center justify-center">
                <img className="h-12" src={"/images/appstore-badge.png"} />
                <img
                  className="h-12 ml-4"
                  src={"/images/playstore-badge.png"}
                />
              </div>
            </div>
          </>
        </section>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
