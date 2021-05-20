import React from "react"
import { Link } from "gatsby"
import FuseImage from "../../static/img/fuselogo.png"

export default function Navbar() {
  return (
    <div class="">
      <nav class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="-ml-2 mr-2 flex items-center md:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <Link className="flex-shrink-0 flex items-center cursor-pointer"  to="/" >
              <img
                class="hidden lg:block h-8 w-auto"
                src={FuseImage}
                alt="Workflow"
              ></img>
            </Link>

            <div class="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                className="text-gray-900 inline-flex items-center px-1 pt-1   "
                to="/about"
                activeClassName="border-sunset-700 border-b-1"
              >
                About
              </Link>
              <Link
                className=" text-gray-900 inline-flex items-center px-1 pt-1    "
                to="/ourteam"
                activeClassName="border-sunset-700 border-b-2 text-sunset-700"
              >
                The Team
              </Link>
              <Link
                className="text-gray-900 inline-flex items-center px-1 pt-1   "
                to="/about"
              >
                The Program
              </Link>
              <Link
                className="text-gray-900 inline-flex items-center px-1 pt-1  "
                to="/about"
              >
                Volunteer/Donate
              </Link>
             
            
            </div>

            <div className="inline-flex items-center">
              <button
                type="button"
                class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sunset-700 shadow-sm hover:bg-sunset-600 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                <span>Apply</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
