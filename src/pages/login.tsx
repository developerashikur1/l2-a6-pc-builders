import { Github, Google } from "@/assets/Icon";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.email) {
      toast.success("Login successfully");
      router.push("/");
    }
  }, [session, router]);

  return (
    <div className="min-h-[520px] flex items-center">
      <Head>
        <title>Next Login</title>
      </Head>
      <div className="p-8 bg-orange-200 w-[90%] sm:w-[500px] mx-auto rounded-lg">
        <h1 className="mb-4 text-2xl font-semibold text-center">Login</h1>
        <div className="sm:flex sm:justify-center md:justify-between items-center gap-4">
          <div
            onClick={() =>
              signIn("google", {
                callbackUrl: process.env.BASE_URL,
              })
            }
            className="flex items-center gap-2 p-2 bg-white rounded-md mb-4 sm:mb-0"
          >
            <Google />
            <p className="text-base font-bold">Login with Google</p>
          </div>
          <div
            onClick={() =>
              signIn("github", {
                callbackUrl: process.env.BASE_URL,
              })
            }
            className="flex  items-center gap-2 p-2 bg-white rounded-md"
          >
            <Github />
            <p className="text-base font-bold">Login with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
