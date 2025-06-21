import { ChartBar, ChevronRight, MapPin } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="absolute w-60 h-full shadow-xl bg-gray-300) p-5 mt-17">
      <div className="flex justify-between">
        <div>
          <img src="./vite.svg" style={{ width: 50, height: 50 }} />
        </div>
        <span className="p-1 bold text-primary">Vite Dashboard</span>
      </div>
      <div className="pt-10">
        <div className="text-primar text-left">General</div>
        <div className="p-3 flex justify-between">
          <div className="flex">
            <ChartBar className="text-primary" />
            <span className="pl-2">Graphs</span>
          </div>
          <div>
            <ChevronRight className="text-primary" />
          </div>
        </div>
        <div className="p-3 flex justify-between">
          <div className="flex">
            <MapPin className="text-primary" />
            <span className="pl-2">Maps</span>
          </div>
          <div>
            <ChevronRight className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
