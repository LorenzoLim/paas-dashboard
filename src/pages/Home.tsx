import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Sidebar />
    </div>
  );
};
