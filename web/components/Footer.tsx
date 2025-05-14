import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 dark:text-white mt-auto px-4 py-10 text-sm">
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
            <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
            <li><Link href="/questions" className="hover:text-indigo-600">Questions</Link></li>
            <li><Link href="/dashboard" className="hover:text-indigo-600">Dashboard</Link></li>
            <li><Link href="/help" className="hover:text-indigo-600">Help</Link></li>
            <li><Link href="/about" className="hover:text-indigo-600">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Developer Tools</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-indigo-600">Debug Playground</Link></li>
            <li><Link href="#" className="hover:text-indigo-600">Code Formatter</Link></li>
            <li><Link href="#" className="hover:text-indigo-600">AI Suggestions</Link></li>
            <li><Link href="#" className="hover:text-indigo-600">Bug Tier Board</Link></li>
            <li><Link href="#" className="hover:text-indigo-600">StackMend API</Link></li>
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
            <Link href="#" className="hover:text-indigo-500">🐦 Twitter</Link>
            <Link href="#" className="hover:text-indigo-500">💼 LinkedIn</Link>
            <Link href="#" className="hover:text-indigo-500">💬 Discord</Link>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-10">
        © 2025 StackMend. Built with ❤ for developers. | <Link href="#" className="hover:text-indigo-500">Privacy</Link> · <Link href="#" className="hover:text-indigo-500">Terms</Link>
      </div>
    </footer>
  )
}
