import React from 'react'

const Header = () => {
  return (
    <div className="bg-gray-900">
    <div className="relative pt-6 pb-2 px-2 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
      <div>
        <a className="hover:text-sky-500 dark:hover:text-sky-400" href="/">
          Minions
        </a>
      </div>
      <div className="hidden md:flex items-center">
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <a
                className="hover:text-sky-500 dark:hover:text-sky-400"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-sky-500 dark:hover:text-sky-400"
                href="/leaderboards"
              >
                Leaderboards
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
          <label className="sr-only" id="headlessui-listbox-label-14">
            Theme
          </label>
          <button
            type="button"
            id="headlessui-listbox-button-15"
            aria-haspopup="true"
            aria-expanded="false"
            aria-labelledby="headlessui-listbox-label-14 headlessui-listbox-button-15"
          ></button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header