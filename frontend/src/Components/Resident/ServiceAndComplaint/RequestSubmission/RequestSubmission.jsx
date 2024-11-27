import React, { useState } from 'react'

import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import UAside from '../../../Common/SideBar/ResidentSideBar/UAside';
import Navbar from '../../../Common/Navbar/Navbar';



const RequestSubmission = () => {
  
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [openModel, setOpenModel] = useState(false);
    const [openDeleteModel, setOpenDeleteModel] = useState(false);
    const [formData, setFormData] = useState({
        requesterName: '',
        requestName: '',
        requestDate: '',
        wing: '',
        unit: '',
        priority: '',
        status: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        
        // Add your logic to process form data (e.g., send to API)
      };
    

   
    const handleAddModel = () => {
        setOpenModel(true);
      };

      const handleDeleteModel = () => {
        setOpenDeleteModel(true);
    };

    


const complaints = [
    {
      type: "Unethical Behavior",
      requestDate: "01/07/2024",
      status: "Open",
      description: "Regular waste collection services.",
    },
    {
      type: "Preventive Measures",
      requestDate: "01/07/2024",
      status: "Open",
      description: "Expenses will vary sense for you.",
    },
    {
      type: "Unethical Behavior",
      requestDate: "01/07/2024",
      status: "Open",
      description: "Providing information deliberately.",
    },
    {
      type: "Preventive Measures",
      requestDate: "01/07/2024",
      status: "Open",
      description: "Regular waste collection services.",
    },
    {
      type: "Unethical Behavior",
      requestDate: "01/07/2024",
      status: "Open",
      description: "Regular waste collection services.",
    },
    {
      type: "Preventive Measures",
      requestDate: "01/07/2024",
      status: "Open",
      description: "Regular waste collection services.",
    },
  ];

  const [complaintList, setComplaintList] = useState(complaints);



  
    const toggleDropdown = (index) => {
      setDropdownOpen(dropdownOpen === index ? null : index);
    };


    return (
        <div className='flex h-screen bg-gray-50'>
            <UAside />
            <div className="flex-1 overflow-auto">
              <Navbar/>
                <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-whitebg-gray-100 rounded-lg">
           <Link to="/user/ucomplaintSubmission">
           Complaint Submission
           </Link>
          </button>
          <button className="px-4 py-2 text-white  bg-orange-500 rounded-lg">
            Request Submission
          </button>
        </div>
        <button onClick={handleAddModel} className="px-4 py-2 text-white bg-orange-500 rounded-lg">
          Create Request
        </button>
      </div>

      <h2 className="mb-4 text-xl font-semibold">Request</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complaintList.map((complaint, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#5678E9] px-4 py-2 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-white">{complaint.type}</h2>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-600 hover:text-gray-800 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                  {dropdownOpen === index && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <button onClick={handleDeleteModel}
                    
                        className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold">Request Date:</span>
                  <span className="text-gray-700">{complaint.requestDate}</span>
                </div>

                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold">Status:</span>
                  <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {complaint.status}
                  </span>
                </div>

                <div className="mt-2 flex justify-between">
                  <span className="font-semibold">Description:</span>
                  <span className=" text-gray-600 break-words	">{complaint.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
    </main>
            </div>
            {openModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Create Request</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">
            Requester Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="requesterName"
            value={formData.requesterName}
            onChange={handleChange}
            placeholder="Enter Name"
            className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">
            Request Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="requestName"
            value={formData.requestName}
            onChange={handleChange}
            placeholder="Enter Name"
            className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">
            Request Date<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="requestDate"
            value={formData.requestDate}
            onChange={handleChange}
            placeholder="Select Date"
            className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">
              Wing<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="wing"
              value={formData.wing}
              onChange={handleChange}
              placeholder="Enter Wing"
              className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Unit<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              placeholder="Enter Unit"
              className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2">
            Priority<span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-6">
            {['High', 'Medium', 'Low'].map((priority) => (
              <label key={priority} className="flex items-center">
                <input
                  type="radio"
                  name="priority"
                  value={priority.toLowerCase()}
                  checked={formData.priority === priority.toLowerCase()}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-gray-200"
                />
                <span className="ml-2 text-sm">{priority}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2">
            Status<span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-6">
            {['Open', 'Pending', 'Solve'].map((status) => (
              <label key={status} className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value={status.toLowerCase()}
                  checked={formData.status === status.toLowerCase()}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-gray-200"
                />
                <span className="ml-2 text-sm">{status}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <button
          type="button"
          className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setOpenModel(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create
        </button>
      </div>
    </form>
        </div>
            </div>
          </div>
        )}
                
      {openDeleteModel && (
                           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                           <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                             <div className="p-5">
                             <h2 className="text-xl font-semibold text-gray-900 mb-2">
                             Delete Request?
          </h2>
          <p className="text-sm text-gray-500">
          Are you sure you want to delate this Request?
          </p>
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-4 rounded-b-lg">
       
          <button
            onClick={()=>setOpenDeleteModel(false)}
            className="px-4 border py-2 rounded text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
           Cancel
          </button>
       
          <button
           
            className="px-4 border ml-3 py-2 rounded bg-red-600 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Delete
          </button>
        
                               </div>
                             </div>
                           </div>
                    )}
        </div>
    )
}

export default RequestSubmission
