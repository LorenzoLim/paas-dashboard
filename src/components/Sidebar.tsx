import {
  Activity,
  Bug,
  ChartBar,
  ChevronRight,
  Component,
  FileText,
  MapPin,
  PaintRoller,
  Wrench,
} from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="absolute w-60 h-[calc(100vh-68px)] shadow-xl bg-gray-300) p-5 mt-17 flex flex-col justify-between">
      <div>
        <div className="flex">
          <div>
            <img src="./vite.svg" style={{ width: 60, height: 60 }} />
          </div>
          <span className="p-1 bold text-primary text-lg">
            PaaS Dashboard{" "}
            <span className="text-sm text-black">powered by: Vite</span>
          </span>
        </div>
        <div className="pt-10">
          <div className=" text-left">General</div>
          <div className="group p-3 flex justify-between hover:cursor-pointer hover:bg-gray-200">
            <div className="flex">
              <ChartBar className="text-primary" />
              <span className="pl-2 text-primary">Graphs</span>
            </div>
            <div>
              <ChevronRight className="text-primary group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>
          <div className="group p-3 flex justify-between hover:cursor-pointer hover:bg-gray-200">
            <div className="flex">
              <MapPin className="text-primary" />
              <span className="pl-2 text-primary">Maps</span>
            </div>
            <div>
              <ChevronRight className="text-primary group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>
          <div className="group p-3 flex justify-between hover:cursor-pointer hover:bg-gray-200">
            <div className="flex">
              <Activity className="text-primary" />
              <span className="pl-2 text-primary">Activity</span>
            </div>
            <div>
              <ChevronRight className="text-primary group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>
          <div className="group p-3 flex justify-between hover:cursor-pointer hover:bg-gray-200">
            <div className="flex">
              <Component className="text-primary" />
              <span className="pl-2 text-primary">Components</span>
            </div>
            <div>
              <ChevronRight className="text-primary group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>
          <div className="group p-3 flex justify-between hover:cursor-pointer hover:bg-gray-200">
            <div className="flex">
              <FileText className="text-primary" />
              <span className="pl-2 text-primary">Documentation</span>
            </div>
            <div>
              <ChevronRight className="text-primary group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="text-primar text-left">Tools</div>
          <div className="group p-3 flex justify-between hover:cursor-pointer hover:bg-gray-200">
            <div className="flex">
              <Wrench className="text-primary" />
              <span className="pl-2 text-primary">Settings</span>
            </div>
            <div>
              <ChevronRight className="text-primary group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>
          <div className="group p-3 flex justify-between hover:cursor-pointer hover:bg-gray-200">
            <div className="flex">
              <PaintRoller className="text-primary" />
              <span className="pl-2 text-primary">Theme</span>
            </div>
            <div>
              <ChevronRight className="text-primary group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>
          <div className="group p-3 flex justify-between hover:cursor-pointer hover:bg-gray-200">
            <div className="flex">
              <Bug className="text-primary" />
              <span className="pl-2 text-primary">Debug</span>
            </div>
            <div>
              <ChevronRight className="text-primary group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-primary">Vite PaaS dashboard by Lorenzo Lim</div>
    </div>
  );
};
