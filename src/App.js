import "./App.css";
import logo from "./images/logo.png";
import searchIcon from "./images/search.png";
import Person1 from "./images/person1.svg";
import dayMode from "./images/icons/day-mode.svg";
import settings from "./images/icons/settings.svg";
import notification from "./images/icons/notification.svg";
import profileDP from "./images/icons/profileDP.svg";
import whatsapp from "./images/icons/whatsapp.svg";
import OfficeAnimaton from "./images/icons/OfficeAnimaton.svg";
import docLock from "./images/icons/doc_lock.svg";
import clock from "./images/icons/clock.svg";
import calendar from "./images/icons/calender.svg";
import threeDots from "./images/icons/threeDots.svg";
import Pythons from "./images/icons/python.svg";
import Angular from "./images/icons/Angular.svg";
import java from "./images/icons/java.svg";
import uiuxDesign from "./images/icons/uiuxDesign.svg";
import Eye from "./images/icons/eye.svg";
import Sidebar from "./Sidebar";
import BarChart from "./Components/Chart";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    values: [65, 59, 80, 81, 56, 55],
  };

  const userData = [
    {
      id: "#001",
      name: "John Smith",
      role: "Senior Python Developer",
      date: "19th Feb 2024",
      time: "10.30 A.M",
      firstLevel: "7/10",
      secondLevel: "6/10",
      thirdLevel: "Waiting",
      fourthLevel: "waiting",
      MeetingVia: "G-meet",
      InterviewerOne: "Stella",
      InterviewerTwo: "Smith",
      InterviewerThree: "Stephan",
      attendees: "Johnson",
      status: "active",
      totalMarks: "24/40",
    },
    {
      id: "#002",
      name: "Maria",
      role: "Senior Python Developer",
      date: "19th Feb 2024",
      time: "10.30 A.M",
      firstLevel: "7/10",
      secondLevel: "6/10",
      thirdLevel: "Waiting",
      fourthLevel: "waiting",
      MeetingVia: "G-meet",
      InterviewerOne: "Stella",
      InterviewerTwo: "Smith",
      InterviewerThree: "Stephan",
      attendees: "Johnson",
      status: "active",
      totalMarks: "24/40",
    },
    {
      id: "#003",
      name: "Antony",
      role: "Senior Python Developer",
      date: "19th Feb 2024",
      time: "10.30 A.M",
      firstLevel: "7/10",
      secondLevel: "6/10",
      thirdLevel: "Waiting",
      fourthLevel: "waiting",
      MeetingVia: "G-meet",
      InterviewerOne: "Stella",
      InterviewerTwo: "Smith",
      InterviewerThree: "Stephan",
      attendees: "Johnson",
      status: "active",
      totalMarks: "24/40",
    },
    {
      id: "#004",
      name: "Vijay",
      role: "Senior Python Developer",
      date: "19th Feb 2024",
      time: "10.30 A.M",
      firstLevel: "7/10",
      secondLevel: "6/10",
      thirdLevel: "Waiting",
      fourthLevel: "waiting",
      MeetingVia: "G-meet",
      InterviewerOne: "Stella",
      InterviewerTwo: "Smith",
      InterviewerThree: "Stephan",
      attendees: "Johnson",
      status: "active",
      totalMarks: "24/40",
    },
  ];

  const postedJobs = [
    {
      id: 1,
      image: Pythons,
      name: "Python Developers",
      role: "Senior Developers",
      time: "6min ago",
      total: 258,
      percentage: "28%",
    },
    {
      id: 2,
      image: Angular,
      name: "Angular Developers",
      role: "Senior Developers",
      time: "6min ago",
      total: 258,
      percentage: "28%",
    },
    {
      id: 3,
      image: java,
      name: "Java Developers",
      role: "Senior Developers",
      time: "6min ago",
      total: 258,
      percentage: "28%",
    },
    {
      id: 4,
      image: uiuxDesign,
      name: "UX|UI Designers",
      role: "Senior Developers",
      time: "6min ago",
      total: 258,
      percentage: "28%",
    },
  ];

  return (
    <div className="bg-[#F9F9F9] h-full">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="#" className="text-white text-xl font-bold">
                <img src={logo} alt="Logo" className="h-10" />
              </a>
              <div className="ml-4 flex-shrink-0 relative">
                <input
                  type="text"
                  className="rounded-md shadow-lg px-4 py-2 pr-10 focus:outline-none focus:border-slate-400"
                  placeholder="Search..."
                />
                <img
                  src={searchIcon}
                  alt="Search"
                  className="absolute right-3 top-3 h-4 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex">
              <a
                href="#"
                className="text-gray-300 hover:text-white mx-5 px-2 py-2 rounded-md text-sm font-medium"
              >
                <img src={dayMode} alt="Search" width={25} height={25} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white mx-5 px-2 py-2 rounded-md text-sm font-medium"
              >
                <img src={whatsapp} alt="Search" width={25} height={25} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white mx-5 px-2 py-2 rounded-md text-sm font-medium"
              >
                <img src={notification} alt="Search" width={25} height={25} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white mx-5 px-2 py-2 rounded-md text-sm font-medium"
              >
                <img src={settings} alt="Search" width={25} height={25} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white mx-5 px-2 py-2 rounded-md text-sm font-medium"
              >
                <img src={profileDP} alt="Search" width={25} height={25} />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-row">
        <Sidebar />
        <section className="mt-10 pl-12 w-full">
          <div className="flex justify-between">
            <div>
              <p className="text-2xl mb-3">HR Employee</p>
              <p className="text-base text-slate-600">
                Enjoy your selecting potential candidates Tracking and
                Management System.
              </p>
            </div>
            <div className="mr-10">
              <button className="bg-[#0A66C2] text-white px-6 py-2 text-sm mt-2">
                Task Details
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="bg-white mt-10 p-5 col-span-7 shadow-lg">
              <p className="text-2xl text-slate-600">Application's Info</p>
              <BarChart data={data} />
            </div>
            <div className="bg-gradient-to-r col-span-5 from-[#0A66C2] to-[#5994CE] border rounded-2xl mt-10">
              <div className="flex justify-between w-full">
                <div className="mt-5">
                  <div className="m-5 mb-0 p-5 w-30 bg-white h-fit flex justify-center">
                    <img src={docLock} alt="Search" width={80} height={150} />
                  </div>
                  <p className="text-white text-6xl p-5 font-bold">0033</p>
                </div>
                <div>
                  <img
                    className="absolute top-44 right-0"
                    src={OfficeAnimaton}
                    alt="Search"
                    width={250}
                    height={250}
                  />
                  <img
                    className="absolute top-64 right-44"
                    src={OfficeAnimaton}
                    alt="Search"
                    width={140}
                    height={40}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-white text-2xl p-5">New Assessment's</p>
                <div className="m-5">
                  <button className="bg-[#ffffff] text-black px-6 py-2 text-sm font-semibold mt-2">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-9">
              <div className="bg-white mt-5 p-5 shadow-md">
                <div className="flex justify-between pb-4 border-b-slate-300 border-b">
                  <p>Today Interviews Meetings Info</p>
                  <img
                    className="cursor-pointer"
                    src={threeDots}
                    alt="Search"
                    width={4}
                    height={4}
                  />
                </div>
                <div className="flex scrollbar space-x-8 mt-5">
                  {userData.map((item, key) => (
                    <section
                      key={key}
                      className="flex-shrink-0 w-[750px] border mt-5"
                    >
                      <div className="grid grid-cols-3">
                        <div className="col-span-1 border">
                          <div className="mt-2 p-10 flex flex-col items-center">
                            <img
                              src={Person1}
                              alt="Search"
                              width={100}
                              height={100}
                            />
                            <p className="text-center">{item.name}</p>
                            <p className="text-center">{item.role}</p>
                          </div>
                          <div className="p-2 grid grid-cols-2 border">
                            <div className="text-center w-full border-r-2">
                              <div className="flex justify-center py-2">
                                <img
                                  src={calendar}
                                  alt="Search"
                                  width={25}
                                  height={25}
                                />
                              </div>
                              <p className="text-center">{item.date}</p>
                            </div>
                            <div>
                              <div className="flex justify-center py-2">
                                <img
                                  src={clock}
                                  alt="Search"
                                  width={25}
                                  height={25}
                                />
                              </div>
                              <p className="text-center">{item.time}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div class="grid grid-rows-4 grid-flow-col text-center w-full">
                            <div className="px-10 py-5 border">
                              1st Level: {item.firstLevel}
                            </div>
                            <div className="px-10 py-5 border">
                              2nd Level: {item.secondLevel}
                            </div>
                            <div className="px-10 py-5 border">
                              3rd Level: {item.thirdLevel}
                            </div>
                            <div className="px-10 py-5 border">
                              Meet Via: {item.MeetingVia}
                            </div>
                            <div className="px-10 py-5 border">
                              Interviewer: {item.InterviewerOne}
                            </div>
                            <div className="px-10 py-5 border">
                              Interviewer: {item.InterviewerTwo}
                            </div>
                            <div className="px-10 py-5 border">
                              Interviewer: {item.InterviewerThree}
                            </div>
                            <div className="px-10 py-5 border">
                              Attendees: {item.attendees}
                            </div>
                          </div>
                          <div className="flex justify-around items-center p-3 pb-6 border">
                            <button className="bg-[#ffffff] text-[#0A66C2] border-[#0A66C2] border px-6 py-2 text-sm font-semibold mt-2">
                              Reschedule Meeting
                            </button>
                            <button className="bg-[#0A66C2] text-white px-6 py-2 text-sm font-semibold mt-2">
                              Join Meeting
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </div>

              <div className="bg-white mt-5 p-5 shadow-md">
                <div className="flex justify-between pb-4">
                  <div className="flex flex-row">
                    <p className="text-2xl">Posted Jobs</p>
                    <a className="pl-10 pt-1 underline text-[#0A66C2]" href="#">
                      View All
                    </a>
                  </div>

                  <div className="flex flex-row">
                    <div className="ml-4 flex-shrink-0 relative">
                      <input
                        type="text"
                        className="rounded-md shadow-lg px-4 py-2 pr-10 focus:outline-none focus:border-slate-400"
                        placeholder="Search..."
                      />
                      <img
                        src={searchIcon}
                        alt="Search"
                        className="absolute right-3 top-3 h-4 cursor-pointer"
                      />
                    </div>
                    <div className="pl-10">
                      <button className="bg-[#ffffff] text-[#0A66C2] border-[#0A66C2] border px-6 py-2 text-sm font-semibold">
                        Filters
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex pb-1 border-b-slate-500 border-b">
                  <p>Active Jobs</p>
                  <p className="ml-28">Pending Jobs</p>
                </div>

                <div className="flex scrollbar">
                  {postedJobs.map((item, key) => (
                    <div
                      key={key}
                      className="flex-shrink-0 m-5 p-5 shadow-md w-64"
                    >
                      <div className="flex justify-between pb-3 border-b-slate-300 border-b">
                        <img
                          className="cursor-pointer"
                          src={item.image}
                          alt="Search"
                          width={30}
                          height={30}
                        />
                        <p>{item.name}</p>
                        <img
                          className="cursor-pointer"
                          src={threeDots}
                          alt="Search"
                          width={4}
                          height={4}
                        />
                      </div>

                      <div className="flex flex-col justify-center items-center">
                        <p className="mt-5 mb-3 text-sm">{item.role}</p>
                        <div className="my-2 p-5 w-fit bg-[#D9E4EF] text-[#0A66C2] text-xl">
                          {item.total}
                        </div>
                        <p className="mt-3 mb-5 text-sm">Total Applicants</p>
                      </div>

                      <div className="flex justify-between border-t-slate-300 border-t pt-2">
                        <p className="text-xs">
                          {item.percentage} vs Last month
                        </p>
                        <p className="ml-5 text-xs">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white mt-5 p-5 shadow-md">
                <div className="flex justify-between pb-4">
                  <div className="flex flex-row">
                    <p className="text-2xl">Candidate Status</p>
                    <a className="pl-10 pt-1 underline text-[#0A66C2]" href="#">
                      View All
                    </a>
                  </div>

                  <div className="flex flex-row">
                    <div className="ml-4 flex-shrink-0 relative">
                      <input
                        type="text"
                        className="rounded-md shadow-lg px-4 py-2 pr-10 focus:outline-none focus:border-slate-400"
                        placeholder="Search..."
                      />
                      <img
                        src={searchIcon}
                        alt="Search"
                        className="absolute right-3 top-3 h-4 cursor-pointer"
                      />
                    </div>
                    <div className="pl-10">
                      <button className="bg-[#ffffff] text-[#0A66C2] border-[#0A66C2] border px-6 py-2 text-sm font-semibold">
                        Filters
                      </button>
                    </div>
                  </div>
                </div>

                <section className="bg-white my-2 rounded-md">
                  <table className="table-fixed w-full">
                    <thead className="bg-[#F9FAFB] border-b border-[#494a4b]">
                      <tr>
                        <th className="py-3 pl-5 font-semibold text-xs text-left text-black">
                          Job ID
                        </th>
                        <th className="py-3 pl-5 font-semibold text-xs text-left text-black">
                          Name
                        </th>
                        <th className="py-3 pl-5 font-semibold text-xs text-left text-black">
                          Position
                        </th>
                        <th className="py-3 pl-5 font-semibold text-xs text-left text-black">
                          1st Level
                        </th>
                        <th className="py-3 pl-5 font-semibold text-xs text-left text-black">
                          2nd Level
                        </th>
                        <th className="py-3 pl-5 font-semibold text-xs text-left text-black">
                          3rd Level{" "}
                        </th>
                        <th className="py-3 pl-5 font-semibold text-xs text-left text-black">
                          4th Level
                        </th>
                        <th className="py-3 pl-5 font-semibold text-xs text-left text-black">
                          Total Marks
                        </th>
                        <th className="py-3 pl-5 font-semibold text-xs text-left text-black">
                          Status
                        </th>
                        <th className="py-3 pl-5 font-semibold text-xs text-left text-black">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.map((item) => (
                        <tr key={item.id}>
                          <td className="py-3 pl-5 border-b border-[#848485] text-black text-sm">
                            {item.id}
                          </td>
                          <td className="py-3 pl-5 border-b border-[#848485] text-black text-sm">
                            {item.name}
                          </td>
                          <td className="py-3 pl-5 border-b border-[#848485] text-black text-sm">
                            {item.role}
                          </td>
                          <td className="py-3 pl-5 border-b border-[#848485] text-black text-sm">
                            {item.firstLevel}
                          </td>
                          <td className="py-3 pl-5 border-b border-[#848485] text-black text-sm">
                            {item.secondLevel}
                          </td>
                          <td className="py-3 pl-5 border-b border-[#848485] text-black text-sm">
                            {item.thirdLevel}
                          </td>
                          <td className="py-3 pl-5 border-b border-[#848485] text-black text-sm">
                            {item.fourthLevel}
                          </td>
                          <td className="py-3 pl-5 border-b border-[#848485] text-black text-sm">
                            {item.totalMarks}
                          </td>
                          <td className="py-3 pl-5 border-b border-[#848485] text-black text-sm">
                            {item.status}
                          </td>
                          <td className="py-3 pl-5 border-b border-[#848485] text-black text-sm">
                            <img
                              className="cursor-pointer"
                              src={Eye}
                              alt="Search"
                              width={25}
                              height={25}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
            <div className="mt-5 col-span-3 mr-5">
              <Calendar className="w-64 !pt-4 !border-0 !shadow-md" />
              <div>
                <div className="py-5 pl-5 pr-2">
                  <div className="flex justify-between">
                      <h2 className="text-lg font-semibold mb-4">
                        Upcoming Meetings
                      </h2>
                      <a className="pl-10 pt-1 underline text-[#0A66C2]" href="#">
                        View All
                      </a>
                  </div>
                    {userData.map((item, key) => (
                      <div key={key} className="w-full">
                        <div className="border-b border-gray-200 pb-4">
                          <div className="flex items-center">
                            <div className="flex flex-row justify-between w-full">
                              <p className="text-sm font-semibold bg-[#d5e5ee] p-2 shadow-sm h-16 w-16 text-center rounded-md">
                                07 <br /> May
                              </p>
                              <div className="flex flex-col pl-2">
                                <p className="text-xs font-medium pb-2">
                                  Interview with Designer
                                </p>
                                <p className="text-xs pb-2">Created by {item.InterviewerOne}</p>
                                <p className="text-xs font-medium pb-2">
                                  10 A.M to 11 A.M
                                </p>
                              </div>
                              <button className="bg-[#0A66C2] text-white text-[10px] px-4 rounded py-2 h-10 ml-2">
                                Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>

              <div>
                <div className="py-5 pl-5 pr-2">
                  <div className="flex justify-between">
                      <h2 className="text-lg font-semibold mb-4">
                        Activity
                      </h2>
                      <a className="pl-10 pt-1 underline text-[#0A66C2]" href="#">
                        View All
                      </a>
                  </div>
                    {userData.map((item, key) => (
                      <div key={key} className="w-full">
                        <div className="border-b border-gray-200 pb-4">
                          <div className="flex items-center">
                            <div className="flex flex-row w-full">
                              <img src={profileDP} alt="Search" width={60} height={60} />
                              <div className="flex flex-col pl-2">
                                <p className="text-xs font-medium pb-2">
                                  {item.name} [{item.role}]
                                </p>
                                <p className="text-xs pb-2">Interviewed by {item.InterviewerOne}</p>
                                <p className="text-xs font-medium pb-2">
                                  {item.time}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>

              <div>
                <div className="py-5 pl-5 pr-2 scrollbar overflow-auto h-64">
                  <div className="flex justify-between">
                      <h2 className="text-lg font-semibold mb-4">
                        Hiring Candidates
                      </h2>
                      <a className="pl-10 pt-1 underline text-[#0A66C2]" href="#">
                        View All
                      </a>
                  </div>
                  {userData.map((item, key) => (
                      <div key={key} className="w-full">
                        <div className="border-b border-gray-200 pb-4">
                          <div className="flex items-center">
                            <div className="flex flex-row w-full">
                              <img src={profileDP} alt="Search" width={60} height={60} />
                              <div className="flex flex-col pl-2">
                                <p className="text-xs font-medium pb-2">
                                  {item.name}
                                </p>
                                <p className="text-xs font-medium pb-2">
                                  {item.role}
                                </p>
                                <p className="text-xs pb-2">Hierd by {item.InterviewerOne}</p>
                              </div>
                              <button className="bg-[#0A66C2] text-white text-[10px] px-4 rounded py-2 h-10 ml-2">
                                Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
