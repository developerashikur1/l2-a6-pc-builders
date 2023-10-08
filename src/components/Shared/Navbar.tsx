import { useMemo, useState } from "react";
// import { useGetProfileQuery } from "../redux/Fetaures/Auth/authSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button, Logo } from "../Common";
import ProfileDropdown from "./ProfileDropdown";
import { useAddToBuildBtnContext } from "@/ContextApi/AddTobuildBtn";
export const categoriesRouteData = [
  {
    name: "Processor",
    link: "processor",
  },
  {
    name: "Graphics Card",
    link: "graphics-card",
  },
  {
    name: "Motherboard",
    link: "motherboard",
  },
  {
    name: "RAM",
    link: "ram",
  },
  {
    name: "Power Supply Unit",
    link: "psu",
  },
  {
    name: "Storage Device",
    link: "storage",
  },
  {
    name: "Monitor",
    link: "monitor",
  },
  {
    name: "Others",
    link: "others",
  },
];

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState<boolean>();
  const { data: profile } = useSession();
  const [openCategories, setOpenCategories] = useState(Boolean);
  const isShowBtn = useAddToBuildBtnContext();

  const categoriesDropDown = useMemo(() => {
    return categoriesRouteData;
  }, []);

  return (
    <div className="max-w-screen-2xl py-4 px-8 xl:px-16 mx-auto">
      <div className="container flex items-center justify-between">
        <Logo />
        <div></div>

        <ul className="hidden md:flex items-center space-x-6">
          <Link className="font-semibold cursor-pointer" href="/">
            <li>Home</li>
          </Link>
          <Link
            href="/"
            className="cursor-pointer"
            onMouseEnter={() => setOpenCategories(true)}
            onMouseLeave={() => setOpenCategories(false)}
          >
            <li>Catagories</li>
          </Link>
          <div
            className={`${
              !openCategories
                ? "hidden"
                : "z-10 flex flex-col absolute top-12 bg-white shadow-md rounded-md"
            }`}
            onMouseEnter={() => setOpenCategories(true)}
            onMouseLeave={() => setOpenCategories(false)}
          >
            {categoriesDropDown.map((item) => (
              <div
                key="item"
                className=" py-2 px-4 hover:bg-orange-200 cursor-pointer"
              >
                <Link
                  href={`/category/${item.link}`}
                  onClick={() => {
                    isShowBtn?.setIsShowing(false);
                  }}
                  id="mhr-addBook"
                >
                  <li>{item.name}</li>
                </Link>
              </div>
            ))}
          </div>
          {/* <Link href="/profile">
            <li className="p-1">Profile</li>
          </Link> */}
        </ul>

        <div className="flex gap-2">
          <Link href={"/pc-builder"}>
            <Button addClass="px-4 py-1">PC Builder</Button>
          </Link>
          <ul className="hidden md:flex items-center space-x-6">
            {profile ? (
              <div className="relative">
                <Image
                  onClick={() => setOpenProfile(!openProfile)}
                  className="inline-block h-9 w-9 cursor-pointer rounded-full ring-2 ring-white"
                  src={profile?.user?.image as string}
                  alt=""
                  width={100}
                  height={100}
                />
                {openProfile && (
                  <ProfileDropdown
                    setOpenProfile={setOpenProfile}
                    data={profile?.user}
                  />
                )}
              </div>
            ) : (
              <Link href="/login" className="cursor-pointer" id="mhr-addBook">
                <li>Login</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
