import { ClipboardCheck, CreditCard, ShoppingCart, Users } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Sidebar />
      <div className="h-[calc(100vh-68px)] w-[calc(100vw-240px)] mt-17 ml-60 text-left p-10">
        <div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight mb-10">
            Overview
          </h1>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-card p-6 rounded shadow-xs card-hover w-90 flex justify-between">
              <div>
                <h4 className="text-gray-400">Total Revenue</h4>
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="font-bold text-2xl">$87,805</div>
                    <div className="px-2 py-1 h-6 mt-1.5 leading-3 ml-4 text-xs bg-green-400 rounded-lg text-white">
                      +5.3%
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-2 border-solid border-[#B3EBF2] rounded-full p-4">
                <CreditCard
                  size={24}
                  className="text-[#B3EBF2] justify-self-end"
                />
              </div>
            </div>
            <div className="bg-card p-6 rounded shadow-xs card-hover w-90 flex justify-between">
              <div>
                <h4 className="text-gray-400">Orders</h4>
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="font-bold text-2xl">3,044</div>
                    <div className="px-2 py-1 h-6 mt-1.5 leading-3 ml-4 text-xs bg-[#FF645C] rounded-lg text-white">
                      -3.0%
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-2 border-solid border-[#FF645C] rounded-full p-4">
                <ShoppingCart
                  size={24}
                  className="text-[#FF645C] justify-self-end"
                />
              </div>
            </div>
            <div className="bg-card p-6 rounded shadow-xs card-hover w-90 flex justify-between">
              <div>
                <h4 className="text-gray-400">Customers</h4>
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="font-bold text-2xl">5,050</div>
                  </div>
                </div>
              </div>
              <div className="border-2 border-solid border-[#1b85b8] rounded-full p-4">
                <Users size={24} className="text-[#1b85b8] justify-self-end" />
              </div>
            </div>
            <div className="bg-card p-6 rounded shadow-xs card-hover w-90 flex justify-between">
              <div>
                <h4 className="text-gray-400">Conversion Rate</h4>
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="font-bold text-2xl">85.4%</div>
                  </div>
                </div>
              </div>
              <div className="border-2 border-solid border-[#77dd77] rounded-full p-4">
                <ClipboardCheck
                  size={24}
                  className="text-[#77dd77] justify-self-end"
                />
              </div>
            </div>
          </div>
          <div className="bg-card p-5 mt-10 rounded shadow-xs h-200">
            <div className="flex justify-between border-b-2 border-black-900 pb-5">
              <h2 className="text-xl font-bold tracking-tight">Users</h2>
              <div>
                <button className="cosmic-button cursor-pointer">Export</button>
              </div>
            </div>
            <div className="relative flex flex-col w-full h-full mt-10 overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
              <table className="w-full text-left table-auto min-w-max">
                <thead>
                  <tr>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Name
                      </p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Job
                      </p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Employed
                      </p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        John Michael
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        Manager
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        23/04/18
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <a
                        href="#"
                        className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        Alexa Liras
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        Developer
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        23/04/18
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <a
                        href="#"
                        className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        Laurent Perrier
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        Executive
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        19/09/17
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <a
                        href="#"
                        className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        Michael Levi
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        Developer
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        24/12/08
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <a
                        href="#"
                        className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        Richard Gran
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        Manager
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        04/10/21
                      </p>
                    </td>
                    <td className="p-4">
                      <a
                        href="#"
                        className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        Richard Gran
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        Manager
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        04/10/21
                      </p>
                    </td>
                    <td className="p-4">
                      <a
                        href="#"
                        className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
