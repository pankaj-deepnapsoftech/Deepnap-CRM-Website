import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="mt-36">
      <div className="mb-10">
        <h1 className="text-4xl font-medium text-[#262544] text-center mb-1">
          Pricing
        </h1>
        <p className="mx-auto text-center font-light w-[90%] md:w-[40rem]">
        Choose the perfect plan for your needs! Our pricing options are designed to fit everyone, from individuals to large organizations. Whether you're just starting out or looking for advanced solutions, we have a plan to help you succeed. Explore the features included in each plan and find the right fit for you today!
        </p>
      </div>


      <div className="pricing w-full px-5 md:px-0 md:h-auto mb-20">
      <div className='my-10 flex flex-col flex-wrap md:flex-row justify-center gap-10 w-full px-4'>
     {/*  */}
          <div className='bg-white border trial-plan min-w-[25rem]'>
                <div className='px-5 py-10 text-white bg-gray-400'>
                    <div className='text-3xl font-medium text-center'>₹ 1000/-</div>
                    <div className='text-lg font-light text-center'>Per User Billed Monthly</div>
                </div>
                <ul className='leading-8 font-light py-5 px-5'>
                <li className="flex gap-2 items-center"><FcCheckmark />Employee Access Management</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Lead Mangement and Assignation</li>
                    <li className="flex gap-2 items-center "><GrClose  className="text-red-500"/>Customer Management</li>
                    <li className="flex gap-2 items-center"><GrClose   className="text-red-500"/>Offer Management and PDF Generation</li>
                    <li className="flex gap-2 items-center"><GrClose   className="text-red-500"/>Invoice Management and PDF Generation</li>
                    <li className="flex gap-2 items-center"><GrClose   className="text-red-500"/>Proforma Invoice Management and PDF Generation</li>
                    <li className="flex gap-2 items-center"><GrClose  className="text-red-500"/>Payment Management and PDF Generation</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Product Management</li>
                    <li className="flex gap-2 items-center"><GrClose  className="text-red-500" />Expense Management</li>
                    <li className="flex gap-2 items-center"><GrClose   className="text-red-500"/>Support Management</li>
                    <li className="flex gap-2 items-center"><GrClose  className="text-red-500" />Yearly Reports</li>
                    <li className="flex gap-2 items-center "><GrClose  className="text-red-500"/>Lifetime Access</li>

                </ul>
                <div className="px-2 py-2"><button className="w-full py-2 border border-gray-400 rounded-md text-lg bg-gray-400 text-white hover:bg-transparent ease-in-out duration-300 hover:text-gray-400">Try Now</button></div>
            </div>
{/*  */}

            <div className='bg-white border economical-plan min-w-[25rem]'>
                <div className='px-5 py-10 text-white bg-[#ff4c4c]'>
                    <div className='text-3xl font-medium text-center'>₹ 1000/-</div>
                    <div className='text-lg font-light text-center'>Per User Billed Monthly</div>
                </div>
                <ul className='leading-8 font-light py-5 px-5'>
                    <li className="flex gap-2 items-center"><FcCheckmark />Employee Access Management</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Lead Mangement and Assignation</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Customer Management</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Offer Management and PDF Generation</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Invoice Management and PDF Generation</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Proforma Invoice Management and PDF Generation</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Payment Management and PDF Generation</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Product Management</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Expense Management</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Support Management</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Yearly Reports</li>
                    <li className="flex gap-2 items-center "><GrClose  className="text-red-500"/>Lifetime Access</li>

                </ul>
                <div className="px-2 py-2"><Link to='/checkout'><button className="w-full py-2 border border-[#ff4c4c] rounded-md text-lg bg-[#ff4c4c] text-white hover:bg-transparent ease-in-out duration-300 hover:text-[#ff4c4c]">Subscribe Now</button></Link></div>
            </div>
            <div className='bg-white border best-plan min-w-[25rem]'>
                <div className='px-5 py-10 text-white bg-[#428d1b]'>
                    <div className='text-3xl font-medium text-center'>₹ 80,000/-</div>
                    <div className='text-lg font-light text-center'>One Time Payment</div>
                </div>
                <ul className='leading-8 font-light py-5 px-5'>
                    <li className="flex gap-2 items-center"><FcCheckmark />Employee Access Management</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Lead Mangement and Assignation</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Customer Management</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Offer Management and PDF Generation</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Invoice Management and PDF Generation</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Proforma Invoice Management and PDF Generation</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Payment Management and PDF Generation</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Product Management</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Expense Management</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Support Management</li>
                    <li className="flex gap-2 items-center"><FcCheckmark />Yearly Reports</li>
                    <li className="flex gap-2 items-center "><FcCheckmark/>Lifetime Access</li>

                </ul>
                <div className="px-2 py-2"><Link to='/checkout'><button className="w-full py-2 border border-[#428d1b] rounded-md text-lg bg-[#428d1b] text-white hover:bg-transparent ease-in-out duration-300 hover:text-[#428d1b]">Buy Now</button></Link></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
