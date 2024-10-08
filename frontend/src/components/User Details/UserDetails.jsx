import React from "react";
import Modal from "../ui/Modal";
import { useDispatch, useSelector } from "react-redux";
import { userNotExists } from "../../redux/reducer/auth";
import { toast } from "react-toastify";
import { useCookies } from 'react-cookie';

const UserDetails = ({ hideModal }) => {
    const [cookies, _, removeCookie] = useCookies();

  const { name, email, company, city, phone, employeeCount } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const logoutHandler = ()=>{
    if(cookies?.access_token){
        removeCookie('access_token');
    }
    dispatch(userNotExists());
    hideModal();
    toast.success("Logged out successfully");
  }

  return (
    <Modal hideModal={hideModal}>
      <h1 className="text-3xl font-medium text-[#262544] pt-5 px-5">Account Details</h1>
      <div className="w-max mx-auto lg:min-h-[20rem] h-auto overflow-auto">
        <div className="my-5">
          <div className="flex flex-col md:flex-row items-start flex-wrap md:items-center gap-2 md:gap-5 mb-2">
            <p className="w-[15rem]">Name</p>
            <p className="bg-[#d9d9d9] text-[#5c5c5c] py-1 px-5 rounded-sm w-[20rem]">
              {name}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start flex-wrap md:items-center gap-2 md:gap-5 mb-2">
            <p className="w-[15rem]">Email</p>
            <p className="bg-[#d9d9d9] text-[#5c5c5c] py-1 px-5 rounded-sm w-[20rem]">
              {email}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start flex-wrap md:items-center gap-2 md:gap-5 mb-2">
            <p className="w-[15rem]">Phone no.</p>
            <p className="bg-[#d9d9d9] text-[#5c5c5c] py-1 px-5 rounded-sm w-[20rem]">
              {phone}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start flex-wrap md:items-center gap-2 md:gap-5 mb-2">
            <p className="w-[15rem]">Company</p>
            <p className="bg-[#d9d9d9] text-[#5c5c5c] py-1 px-5 rounded-sm w-[20rem]">
              {company}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start flex-wrap md:items-center gap-2 md:gap-5 mb-2">
            <p className="w-[15rem]">City</p>
            <p className="bg-[#d9d9d9] text-[#5c5c5c] py-1 px-5 rounded-sm w-[20rem]">
              {city}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start flex-wrap md:items-center gap-2 md:gap-5 mb-2">
            <p className="w-[15rem]">Number of Employees</p>
            <p className="bg-[#d9d9d9] text-[#5c5c5c] py-1 px-5 rounded-sm w-[20rem]">
              {employeeCount}
            </p>
          </div>
        </div>

        <div className="flex justify-end pb-5">
          <button onClick={hideModal} className="border rounded-sm py-1 px-8 bg-[#2e2960] text-lg font-light text-white mr-2">
            Close
          </button>
          <button onClick={logoutHandler} className="border rounded-sm py-1 px-8 bg-[#db4747] text-lg font-light text-white">
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UserDetails;
