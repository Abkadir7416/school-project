import Announcements from "@/components/Announcement";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row">
      {/* LEFT  */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS  */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* MIDDLE CHARTS  */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHARTS  */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTEDANCE CHART  */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/* BOTTOM CHART  */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
