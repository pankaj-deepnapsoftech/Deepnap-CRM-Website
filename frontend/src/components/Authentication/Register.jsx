import { FaBuilding, FaLocationArrow, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone, FaUserGroup } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = ({
  name,
  email,
  password,
  phone,
  city,
  company,
  employeeCount,
  setName,
  setEmail,
  setPassword,
  setPhone,
  setCity,
  setCompany,
  setEmployeeCount,
  isRegistering,
  registered,
  setIsRegistering,
  setRegistered,
  setOtpVerfication,
}) => {
  const handleRegistration = async (e) => {
    e.preventDefault();

    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      phone.trim().length === 0 ||
      company.trim().length === 0 ||
      city.trim().length === 0 ||
      employeeCount.trim().length === 0
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    if (phone.trim().length < 10 || phone.trim().length > 10) {
      toast.error("Phone no. field should be 10 digits long");
      return;
    }

    try {
      const url = process.env.REACT_APP_BACKEND_URL + "organization/create";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
          company,
          city,
          employeeCount,
        }),
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      toast.success(data.message);
      setName("");
      setPhone("");
      setCompany("");
      setCity("");
      setPassword("");
      setEmployeeCount("");
      setRegistered(true);
      setOtpVerfication(true);
      setIsRegistering(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      {!registered && (
        <div className="text-center flex-1 py-10">
          <div>
            <h1 className="text-[#24243e] text-4xl mb-10">Create Account</h1>
            <form onSubmit={handleRegistration} className="space-y-3">
              <div className="relative w-[20rem] mx-auto">
                <div className="absolute top-[10px] left-3">
                  <FaUser color="#a3a3a3" size={20} />
                </div>
                <input
                  className="w-full font-light outline-none px-10 py-[10px] rounded-sm bg-[#f3f3f3]"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  id="city"
                  placeholder="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
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
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
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
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(e.target.value)}
                  placeholder="Number of Employees"
                  required
                ></input>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-[20rem] lg:w-[15rem] py-1 lg:py-3 text-lg border border-[#2e2a5b] text-white bg-[#2e2a5b] rounded-full font-light hover:bg-white hover:text-[#2e2a5b] ease-in-out duration-300"
                >
                  Create Account
                </button>
              </div>

              <div className="">
                <p
                  onClick={() => setIsRegistering(false)}
                  className="text-[#3c88ff] hover:underline cursor-pointer"
                >
                  Already have an account?
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
