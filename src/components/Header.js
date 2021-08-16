import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const [session, loading] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  console.log(items);
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* {Search} */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="h-10 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* {right} */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={session ? signOut : signIn} className=" link">
            <p> {session.user.name}</p>
            <p className="font-extrabold md:text-sm">Accounts</p>
          </div>

          <div className=" link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">Orders</p>
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className=" link relative flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4  bg-yellow-400 rounded-full text-center text-black font-bold ">
              {items.length}
            </span>
            <ShoppingCartIcon className=" h-10 " />
            <p className="hidden md:flex font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      {/* {Bottom nav} */}

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center ">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link"> Prime Video</p>
        <p className="link"> Amazon Business</p>
        <p className="link hidden"> Todays Deal</p>
        <p className="link hidden lg:inline-flex"> Electronics</p>
        <p className="link hidden lg:inline-flex"> Grocery</p>
        <p className="link hidden lg:inline-flex"> Prime</p>
        <p className="link hidden lg:inline-flex"> Buy again</p>
        <p className="link hidden lg:inline-flex"> Shopper toolkit</p>
        <p className="link hidden lg:inline-flex"> Health</p>
      </div>
    </header>
  );
}

export default Header;
