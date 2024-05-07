import Header from "../../components/Header";
import { HomeIcon, LogoutIcon, ProfileIcon } from "../../utils/icons";
const Profile = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="grid grid-cols-10 gap-1">
          <div className="col-span-10 lg:col-span-2 border-2 rounded-lg">
            <div className="grid place-items-center p-10">
              <img
                src="/src/assets/profile.jpg"
                className="w-28 rounded-full"
              />
              <h1 className="font-bold">Amit Mandal</h1>
              <h1 className="font-medium text-xs">01312662716</h1>
              <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xs">
                Edit Profile
              </button>
            </div>
            <div className="grid place-items-start bg-violet-200">
              <h1 className="font-bold">Profile Menu</h1>
            </div>
            <div className="grid place-items-start p-">
              <span className="grid grid-flow-col auto-cols-max items-center gap-4 mt-3 cursor-pointer">
                <HomeIcon />
                <h1 className="font-semibold">Home</h1>
              </span>
              <span className="grid grid-flow-col auto-cols-max items-center gap-4  mt-3 cursor-pointer">
                <ProfileIcon />
                <h1 className="font-semibold">Profile</h1>
              </span>
              <span className="grid grid-flow-col auto-cols-max items-center gap-4  mt-3 cursor-pointer">
                <LogoutIcon />
                <h1 className="font-semibold">Logout</h1>
              </span>
            </div>
          </div>
          <div className="col-span-10 lg:col-span-6 border-2 rounded-lg p-2">
            <div className="divide-y divide-dashed">
              <div className="col-span-10 lg:col-span-6 mb-4">
                <h1 className="font-bold text-3xl">Basic Information</h1>
              </div>
              <div className="grid grid-cols-10 lg:grid-cols-6">
                <div className="col-span-2 font-medium text-gray-500">Name</div>
                <div className="col-span-4 lg:col-span-2 text-left text-violet-500">
                  Amit Kumar Mandal
                </div>
              </div>
              <div className="grid grid-cols-10 lg:grid-cols-6">
                <div className="col-span-3 lg:col-span-2 text-gray-500 font-medium">
                  Email Address
                </div>
                <div className="col-span-4 lg:col-span-2 text-left text-violet-500">
                  amit.mandal@v2.ltd
                </div>
              </div>
              <div className="grid grid-cols-10 lg:grid-cols-6">
                <div className="col-span-3 lg:col-span-2 text-gray-500 font-medium">
                  Mobile Number
                </div>
                <div className="col-span-4 lg:col-span-2 text-left text-violet-500">
                  +880-1312662716
                </div>
              </div>
              <div className="grid grid-cols-10 lg:grid-cols-6">
                <div className="col-span-3 lg:col-span-2 text-gray-500 font-medium">Name</div>
                <div className="col-span-4 lg:col-span-2 text-left text-violet-500">
                  Amit Kumar Mandal
                </div>
              </div>
              <div className="grid grid-cols-10 lg:grid-cols-6">
                <div className="col-span-3 lg:col-span-2 text-gray-500 font-medium">
                  Gender
                </div>
                <div className="col-span-4 lg:col-span-2 text-left text-violet-500">Male</div>
              </div>
              <div className="grid grid-cols-10 lg:grid-cols-6">
                <div className="col-span-3 lg:col-span-2 text-gray-500 font-medium">
                  Member Since
                </div>
                <div className="col-span-4 lg:col-span-2 text-left text-violet-500">
                  Jul 14, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
