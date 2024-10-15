import React, { useState } from 'react';
import { User, Search, Bell } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const TopBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="bg-emerald-500 text-white p-4 rounded-b-3xl shadow-md">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
              <button className="p-2">
                <User size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
              <div className="flex flex-col h-full p-4">
                <h2 className="text-lg font-semibold mb-4 text-emerald-800">User Profile</h2>
                <nav className="space-y-2">
                  <a href="#" className="block p-2 hover:bg-emerald-100 rounded text-emerald-800">My Account</a>
                  <a href="#" className="block p-2 hover:bg-emerald-100 rounded text-emerald-800">Settings</a>
                  <a href="#" className="block p-2 hover:bg-emerald-100 rounded text-emerald-800">Notifications</a>
                  <a href="#" className="block p-2 hover:bg-emerald-100 rounded text-emerald-800">Help Center</a>
                  <a href="#" className="block p-2 hover:bg-emerald-100 rounded text-emerald-800">Log Out</a>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center">
            <button className="p-2 mr-2">
              <Bell size={24} />
            </button>
            <button className="p-2">
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;