"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export function ChangeLocale() {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    // <div>
    //   <p>Current locale: {currentLocale}</p>
    //   <hr />
    //   <button type="button" onClick={() => changeLocale("en")}>
    //     EN
    //   </button>
    //   <button type="button" onClick={() => changeLocale("vi")}>
    //     VI
    //   </button>
    //   <hr />
    // </div>
    <ul className="flex items-center space-x-4">
      <li>
        <button
          className={`${
            currentLocale === 'en' ? 'font-medium' : ''
          } text-sm text-gray-600`}
          disabled={currentLocale === 'en'}
          onClick={() => changeLocale('en')}
        >
          English
        </button>
      </li>
      <li>
        <button
          className={`${
            currentLocale === 'vi' ? 'font-medium' : ''
          } text-sm text-gray-600`}
          disabled={currentLocale === 'vi'}
          onClick={() => changeLocale('vi')}
        >
          Vietnamese
        </button>
      </li>
    </ul>
  );
}
