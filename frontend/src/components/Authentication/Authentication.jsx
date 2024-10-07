import React, { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import { FaBuilding, FaLocationArrow, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone, FaUserGroup } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

const Authentication = ({hideModal}) => {
    const [isRegistering, setIsRegistering] = useState(true);
    const [formdata, setFormData] =  useState({
       name :"",
       email :"",
       password :"",
       phone :"",
       company :"",
       city:"",
       employeeCount:0
    })


    const handleChange = (e) => {
      setFormData({
        ...formdata,
        [e.target.id]: e.target.value,
      });
    };

    const handleRegistration =async (e)=>{
       e.preventDefault()
       alert("Registration successfull")
    }
    const handleLogin =  (e)=>{
      e.preventDefault()
      alert("Login successfull")

     
    }
  return (
    <div>
      <Modal hideModal={hideModal}>
        <div className="flex lg:min-h-[35rem] lg:h-auto">
          {isRegistering && <div
            className="hidden lg:flex w-[30rem] h-[inherit] justify-center items-center"
            style={{
              background:
                "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
            }}
          >
            <div className="text-center px-5">
              <h1 className="text-white text-3xl font-light my-3">
                Welcome Back!
              </h1>
              <p className="text-white font-light mt-8 mb-6">
               Login to access comprehensive CRM solution designed to help businesses streamline their customer management processes.
              </p>
              <button onClick={()=>setIsRegistering(false)} className="text-white text-lg font-light border rounded-full px-10 py-3 w-[15rem] ease-in-out duration-300 hover:scale-105">
                Login
              </button>
            </div>
          </div>}
          {!isRegistering && <div
            className="hidden lg:flex w-[30rem] h-[inherit] justify-center items-center"
            style={{
              background:
                "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
            }}
          >
            <div className="text-center px-5">
              <h1 className="text-white text-3xl font-light my-3">
                New Here!
              </h1>
              <p className="text-white font-light mt-8 mb-6">
               Create a account to  comprehensive CRM solution designed to help businesses streamline their customer management processes
              </p>
              <button onClick={()=>setIsRegistering(true)} className="text-white text-lg font-light border rounded-full px-10 py-3 w-[15rem] ease-in-out duration-300 hover:scale-105">
                Create Account
              </button>
            </div>
          </div>}
          {isRegistering && <div className="text-center flex-1 py-10">
            <h1 className="text-[#24243e] text-4xl mb-10">
              Create Account
            </h1>

            <form onSubmit={handleRegistration} className="space-y-3">
              <div className="relative w-[20rem] mx-auto">
                <div className="absolute top-[10px] left-3">
                  <FaUser color="#a3a3a3" size={20} />
                </div>
                <input
                  className="w-full font-light outline-none px-10 py-[10px] rounded-sm bg-[#f3f3f3]"
                  type="text"
                  id="name"
                  value={formdata.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                ></input>
              </div>
              <div className="relative w-[20rem] mx-auto">
              <div className="absolute top-[10px] left-3">
                  <FaSquarePhone color="#a3a3a3" size={24} />
                </div>
                <input
                  className="w-full font-light outline-none px-10 py-[10px] rounded-sm bg-[#f3f3f3]"
                  type="number"
                  id="phone"
                  value={formdata.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                ></input>
              </div>
              <div className="relative w-[20rem] mx-auto">
              <div className="absolute top-[10px] left-3">
                  <MdEmail color="#a3a3a3" size={25} />
                </div>
                <input
                  className="font-light outline-none px-10 py-[10px] rounded-sm bg-[#f3f3f3] w-[20rem]"
                  type="email"
                  id="email"
                  value={formdata.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                ></input>
              </div>
              <div className="relative w-[20rem] mx-auto">
                <FaLock
                  color="#a3a3a3"
                  size={20}
                  className="absolute top-[10px] left-3"
                />
                <input
                  className="font-light outline-none px-10 py-[10px] rounded-sm bg-[#f3f3f3] w-[20rem]"
                  type="password"
                  id="password"
                  value={formdata.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                ></input>
              </div>
              <div className="relative w-[20rem] mx-auto">
                <FaLocationArrow
                  color="#a3a3a3"
                  size={20}
                  className="absolute top-[10px] left-3"
                />
                <input
                  className="font-light outline-none px-10 py-[10px] rounded-sm bg-[#f3f3f3] w-[20rem]"
                  type="text"
                  placeholder="city"
                ></input>
              </div>
              <div className="relative w-[20rem] mx-auto">
                <FaBuilding
                  color="#a3a3a3"
                  size={20}
                  className="absolute top-[10px] left-3"
                />
                <input
                  className="font-light outline-none px-10 py-[10px] rounded-sm bg-[#f3f3f3] w-[20rem]"
                  type="text"
                  id="Company_Name"
                  value={formdata.Company_Name}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                ></input>
              </div>
              <div className="relative w-[20rem] mx-auto">
                <FaUserGroup
                  color="#a3a3a3"
                  size={20}
                  className="absolute top-[10px] left-3"
                />
                <input
                  className="font-light outline-none px-10 py-[10px] rounded-sm bg-[#f3f3f3] w-[20rem]"
                  type="number"
                  id="employeeCount"
                  value={formdata.employeeCount}
                  onChange={handleChange}
                  placeholder="Number of Employees"
                  required
                ></input>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-[20rem] lg:w-[15rem] py-1 lg:py-3 text-lg border border-[#2e2a5b] text-white bg-[#2e2a5b] rounded-full font-light hover:bg-white hover:text-[#2e2a5b] ease-in-out duration-300">
                  Create Account
                </button>
              </div>

              <div className="lg:hidden" >
                <p onClick={()=>setIsRegistering(false)} className="text-[#3c88ff] hover:underline">Already have an account?</p>
              </div>
            </form>
          </div>}
          {!isRegistering && <div className="text-center flex-1 py-10 flex flex-col items-center justify-center">
            <h1 className="text-[#24243e] text-4xl mb-10">
              Login
            </h1>

            <form className="space-y-3" onSubmit={handleLogin}>
              <div className="relative w-[20rem] mx-auto">
                <div className="absolute top-[10px] left-3">
                  <MdEmail color="#a3a3a3" size={25} />
                </div>
                <input
                  className="font-light outline-none px-10 py-[10px] rounded-sm bg-[#f3f3f3] w-[20rem]"
                  type="email"
                  id="email"
                  value={formdata.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                ></input>
              </div>
              <div className="relative w-[20rem] mx-auto">
                <FaLock
                  color="#a3a3a3"
                  size={20}
                  className="absolute top-[10px] left-3"
                />
                <input
                  className="font-light outline-none px-10 py-[10px] rounded-sm bg-[#f3f3f3] w-[20rem]"
                  type="password"
                  id="password"
                  value={formdata.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                ></input>
              </div>

              <div className="pt-4">
                <button className="w-[20rem] lg:w-[15rem] py-1 lg:py-3 text-lg border border-[#2e2a5b] text-white bg-[#2e2a5b] rounded-full font-light hover:bg-white hover:text-[#2e2a5b] ease-in-out duration-300">
                  Login
                </button>
              </div>

              <div className="lg:hidden">
                <p onClick={()=>setIsRegistering(true)} className="text-[#3c88ff] hover:underline">Don't have an account?</p>
              </div>
            </form>
          </div>}
        </div>
      </Modal>
    </div>
  );
};

export default Authentication;
