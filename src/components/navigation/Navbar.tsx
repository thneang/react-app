"use client";

import Link from "next/link";

export default function Navbar() {
  const menuElement = (
    <>
      <div className="flex text-white flex-col m-auto">
        <h1 className="self-center font-bold">Menu</h1>
        <nav>
          <ul className="mt-5">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/board">Task board app</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );

  /*Todo handle mobile drawer menu */

  return (
    <>
      <div className="h-screen">
        <div className={`sticky md:block w-48 bg-blue-500 dark:bg-blue-900 p-5 h-full`}>
          <div className="">{menuElement}</div>
        </div>
      </div>
    </>
  );
}
