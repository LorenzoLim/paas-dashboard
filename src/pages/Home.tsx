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
              <h2 className="text-xl font-bold tracking-tight">
                Product Summary
              </h2>
              <div>
                <button className="cosmic-button cursor-pointer">Export</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
