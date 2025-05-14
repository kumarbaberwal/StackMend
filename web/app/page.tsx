import HomePageFooter from "@/components/HomePageFooter";
import Image from "next/image";

export default function Home() {
  const handleToggle = () => {

  }

  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* <!-- Sidebar Toggle Button (Hamburger Icon) --> */}
          <button id="sidebarToggle" className="p-1 bg-transparent text-gray-800 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition absolute left-4">
            {/* <!-- Hamburger Icon --> */}
            <span className="material-symbols-rounded text-xl">menu</span>
          </button>

          {/* <!-- Logo --> */}
          <div className="flex items-center space-x-2">
            {/* <!-- Reduced space-x-3 to space-x-2 --> */}
            <svg width="40" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" rx="40" fill="#4F46E5" />
              <path d="M60 70C60 55 75 45 95 45H130V65H95C88 65 85 68 85 72C85 76 88 80 95 80H110C130 80 145 90 145 110C145 130 130 145 110 145H65V125H110C117 125 120 121 120 117C120 113 117 110 110 110H95C75 110 60 95 60 80V70Z" fill="white" />
            </svg>
            <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide">StackMend</span>
          </div>

          {/* <!-- Navigation --> */}
          <div className="flex space-x-6 text-sm sm:text-base items-center justify-center">
            <a href="#" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600">Home</a>
            <a href="#" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600">Questions</a>
            <a href="#" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600">Dashboard</a>
            <a href="#" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600">Help</a>
            <a href="#" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-600">About</a>

            {/* <!-- Join Now --> */}
            <div className="relative">
              <button id="joinNowBtn"
                className="px-4 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 ease-in-out text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-haspopup="true" aria-expanded="false">
                Join Now
              </button>
              <div id="joinDropdown" className="hidden absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-md z-50">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">Login</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">Sign Up</a>
              </div>
            </div>
          </div>

          {/* <!-- Dark Mode Toggle --> */}
          <div className="ml-4 flex items-center space-x-2">
            <span className="text-sm">Mode</span>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" id="theme-toggle-switch" className="sr-only" />
              <div className="toggle-bg w-full h-full rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"></div>
              <div id="toggle-dot" className="absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 text-xs flex items-center justify-center"></div>
            </label>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-16 bg-slate-50 dark:bg-gray-900">
        <div className="flex">
          {/* <!-- Sidebar (collapsible) --> */}
          <aside
            id="sidebar"
            className="left-0 top-0 h-full w-72 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg transform md:translate-x-0 -translate-x-full transition-transform duration-300 z-40"

          >

            <nav className="p-4 space-y-2 overflow-y-auto">
              <div>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white">
                  <span className="material-symbols-rounded">dashboard</span>
                  <span>Dashboard</span>
                </a>
              </div>
              <div className="dropdown">
                <button className="flex items-center justify-between w-full px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-rounded">calendar_today</span>
                    <span>Services</span>
                  </div>
                  <span className="material-symbols-rounded">keyboard_arrow_down</span>
                </button>
                <div className="dropdown-menu hidden pl-10 mt-1 space-y-1">
                  <a href="#" className="block px-2 py-1 rounded hover:bg-indigo-600">IT Consulting</a>
                  <a href="#" className="block px-2 py-1 rounded hover:bg-indigo-600">Cloud Solutions</a>
                  <a href="#" className="block px-2 py-1 rounded hover:bg-indigo-600">Mobile Apps</a>
                </div>
              </div>

              <div>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white">
                  <span className="material-symbols-rounded">notifications</span>
                  <span>Notifications</span>
                </a>
              </div>

              <div>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white">
                  <span className="material-symbols-rounded">local_library</span>
                  <span>Resources</span>
                </a>
              </div>

              <div className="dropdown " >
                <button className="flex items-center justify-between w-full px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-rounded">star</span>
                    <span>Bookmarks</span>
                  </div>
                  <span className="material-symbols-rounded">keyboard_arrow_down</span>
                </button>
                <div className="dropdown-menu hidden pl-10 mt-1 space-y-1">
                  <a href="#" className="block px-2 py-1 rounded hover:bg-indigo-600">Saved Tutorials</a>
                  <a href="#" className="block px-2 py-1 rounded hover:bg-indigo-600">Favorite Blogs</a>
                  <a href="#" className="block px-2 py-1 rounded hover:bg-indigo-600">Resource Guides</a>
                </div>
              </div>

              <div>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white">
                  <span className="material-symbols-rounded">settings</span>
                  <span>Settings</span>
                </a>
              </div>

              <div className="mt-10 pt-4 border-t border-gray-700 ">
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white">
                  <span className="material-symbols-rounded">help</span>
                  <span>Support</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-white">
                  <span className="material-symbols-rounded">logout</span>
                  <span>Sign Out</span>
                </a>
              </div>
            </nav>
          </aside>


          {/* <!-- Main Content Area --> */}
          <div className="flex-1 p-6">
            {/* <!-- Existing main content here --> */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight dark:text-white">
                  Mend Your Code.<br />
                  Fix Errors Faster.<br />
                  <span className="text-green-500">Together.</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
                  AI-powered fixes + community solutions at your fingertips.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-green-500 hover:bg-green-600 text-white py-2.5 px-6 rounded-md shadow-md">Get Started</a>
                  <a href="#" className="border border-gray-500 dark:border-gray-300 text-gray-800 dark:text-white py-2.5 px-6 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Explore Errors</a>
                </div>
              </div>

              <div className="flex justify-center">
                <img src="Trans1.jpg" alt="Code Fix Preview" className="rounded-xl shadow-lg w-full max-w-3xl object-cover" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- Footer --> */}
      <footer className=" bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 dark:text-white mt-auto px-4 py-10 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          <div>
            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">About StackMend</h4>
            <p className="text-gray-600 dark:text-gray-400">
              StackMend is an AI-powered collaborative platform that helps developers fix bugs, improve code, and learn from real-world issues in minutes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-600">Home</a></li>
              <li><a href="#" className="hover:text-indigo-600">Questions</a></li>
              <li><a href="#" className="hover:text-indigo-600">Dashboard</a></li>
              <li><a href="#" className="hover:text-indigo-600">Help</a></li>
              <li><a href="#" className="hover:text-indigo-600">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Developer Tools</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-600">Debug Playground</a></li>
              <li><a href="#" className="hover:text-indigo-600">Code Formatter</a></li>
              <li><a href="#" className="hover:text-indigo-600">AI Suggestions</a></li>
              <li><a href="#" className="hover:text-indigo-600">Bug Tier Board</a></li>
              <li><a href="#" className="hover:text-indigo-600">StackMend API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Recently Fixed Bugs 🐞</h4>
            <ul className="space-y-2 text-xs">
              <li><code className="text-green-600 dark:text-green-400">NullPointerException</code> in Java</li>
              <li><code className="text-green-600 dark:text-green-400">TypeError in JS</code> - fixed via optional chaining</li>
              <li><code className="text-green-600 dark:text-green-400">Segmentation Fault</code> in C++</li>
              <li><code className="text-green-600 dark:text-green-400">AttributeError</code> in Python</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Join Our Newsletter</h4>
            <form className="space-y-2">
              <input type="email" placeholder="your@email.com" className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-white" />
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">Subscribe</button>
            </form>
            <div className="mt-5 flex space-x-3">
              <a href="#" className="hover:text-indigo-500">🐦 Twitter</a>
              <a href="#" className="hover:text-indigo-500">💼 LinkedIn</a>
              <a href="#" className="hover:text-indigo-500">💬 Discord</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-10">
          © 2025 StackMend. Built with ❤️ for developers. | <a href="#" className="hover:text-indigo-500">Privacy</a> · <a href="#" className="hover:text-indigo-500">Terms</a>
        </div>
      </footer>
    </div>
  );
}
