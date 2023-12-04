import { flexBetween } from "@/styles-constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 935px)");
  const navBarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16 items-center`}>
            {/* RIGHT SIDE */}
            <img src={Logo} alt="logo" className="object-contain" />

            {/* LEFT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} gap-8 text-sm items-center`}>
                <Link
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page="Home"
                />
                <Link
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page="Benifits"
                />
                <Link
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page="Our Classes"
                />
                <Link
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page="Contact Us"
                />
                <p className="cursor-pointer">Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become a Member
                </ActionButton>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggle(!isMenuToggle)}
              >
                <Bars3Icon className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggle && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
              <XMarkIcon className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className={`flex flex-col gap-10 text-2xl items-center`}>
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Home"
            />
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Benifits"
            />
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Our Classes"
            />
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Contact Us"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
