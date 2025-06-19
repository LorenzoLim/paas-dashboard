export const Sidebar = () => {
  return (
    <div className="absolute w-60 h-full shadow-xl bg-gray-300) p-10">
      <div className="mt-17 flex justify-between">
        <div>
          <img src="./vite.svg" style={{ width: 50, height: 50 }} />
        </div>
        <span className="p-1 bold text-primary">Vite Dashboard</span>
      </div>
    </div>
  );
};
