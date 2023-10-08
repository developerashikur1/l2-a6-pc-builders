import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { signOut } from "next-auth/react";
// import { IProfileResponse } from "../types/Auth";

const ProfileDropdown = ({
  data,
  setOpenProfile,
}: {
  data:
    | { name?: string | null; email?: string | null; image?: string | null }
    | undefined;
  setOpenProfile: Dispatch<SetStateAction<boolean | undefined>>;
}) => {
  return (
    <div className="absolute -left-20 mt-2 mr-2 w-[150px]">
      <ul className=" p-3 bg-white shadow-md rounded-md">
        <Link href="/">
          <li className="p-1 font-medium">{data?.name}</li>
        </Link>
        <>
          <li className="p-1 cursor-pointer" onClick={() => signOut()}>
            Logout
          </li>
        </>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
