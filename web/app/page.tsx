import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1 p-6">
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
            <Image 
              src="/Trans1.jpg" 
              alt="Code Fix Preview" 
              width={800}
              height={600}
              className="rounded-xl shadow-lg w-full max-w-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
