import React, { useState } from 'react'
import { Bell, PencilIcon, Eye, MoreVertical, Plus, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'
import Aside from '../../../Common/SideBar/AdminSideBar/Aside';


const complaints = [
  {
    id: '1001',
    requester: {
      name: 'Evelyn Harper',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    requestName: 'Unethical Behavior',
    description: 'Regular waste collection services.',
    date: '10/02/2024',
    unitNumber: 'A',
    unitId: '1001',
    priority: 'Medium',
    status: 'Pending',
  },
  {
    id: '1002',
    requester: {
      name: 'Guy Hawkins',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    requestName: 'Preventive Measures',
    description: 'Event and recreational activities.',
    date: '11/02/2024',
    unitNumber: 'B',
    unitId: '1002',
    priority: 'Low',
    status: 'Solve',
  },
  {
    id: '1003',
    requester: {
      name: 'Robert Fox',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    requestName: 'Unethical Behavior',
    description: 'Regular waste collection services.',
    date: '12/02/2024',
    unitNumber: 'C',
    unitId: '1003',
    priority: 'High',
    status: 'Open',
  },
  {
    id: '1004',
    requester: {
      name: 'Jacob Jones',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    requestName: 'Preventive Measures',
    description: 'Back the fluctuations in spending.',
    date: '13/02/2024',
    unitNumber: 'D',
    unitId: '1004',
    priority: 'Medium',
    status: 'Pending',
  },
]

function RequestTracking() {
  const [requesterName, setRequesterName] = useState("");
  const [requestName, setRequestName] = useState("");
  const [requestDate, setRequestDate] = useState("");
  const [wing, setWing] = useState("");
  const [unit, setUnit] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [userFullName, setUserFullName] = useState("Evelyn Harper");
  const [issueTitle, setIssueTitle] = useState("Unethical Behavior");
  const [submissionDate, setSubmissionDate] = useState("2024-02-25");
  const [departmentWing, setDepartmentWing] = useState("A");
  const [unitNumber, setUnitNumber] = useState("1001");
  const [urgencyLevel, setUrgencyLevel] = useState("medium");
  const [currentStatus, setCurrentStatus] = useState("open");
  const [isOpen, setIsOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openViewModel, setOpenViewModal] = useState(false)
  const [openDeleteModel, setOpenDeleteModel] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
  };


 

  const handleCreateIncome = () => {
    setOpenModal(true)
  }
  const handleEditIncome = () => {
    setOpenEditModal(true)
  }
  const handleViewIncome = () => {
    setOpenViewModal(true)
  }
  const handleDeleteIncome = () => {
    setOpenDeleteModel(true)
  }

  const notifications = [
    {
      id: 1,
      user: 'Evelyn Harper',
      userCode: 'A- 101',
      message: 'gave a fund of',
      amount: '1000 rupees for Navratri.',
      time: '30 Minutes ago',
      avatar: '/api/placeholder/40/40',
      type: 'fund',
    },
    {
      id: 2,
      user: 'Evelyn Harper',
      userCode: 'A- 101',
      message: 'gave a',
      linkText: 'Maintenance',
      amount: ' of 1000 rupees.',
      time: '2 days ago',
      avatar: '/api/placeholder/40/40',
      type: 'maintenance',
    },
    {
      id: 3,
      user: 'Ganesh Chaturthi',
      userCode: 'A- 101',
      amount: '₹ 1,500',
      subtitle: 'Per Person Amount :',
      description:
        'The celebration of Ganesh Chaturthi involves the installation of clay idols of Lord Ganesh in OutResident.',
      time: '2 days ago',
      type: 'event',
    },
  ]

  const getPriorityStyles = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-500 text-white'
      case 'medium':
        return 'bg-blue-500 text-white'
      case 'low':
        return 'bg-green-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'open':
        return 'bg-blue-100 text-blue-800'
      case 'solve':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      <Aside />
      <div className="main">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4 shadow-sm">
          <div className="flex flex-1 items-center">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Home</span>
              <span className="text-gray-500">/</span>
              <Link
                className={`text-blue-500 ${
                  window.location.pathname === '/financial' ? 'font-bold' : 'text-blue-600'
                }`}
                to={'/financial'}
              >
                {' '}
                Request tracking
              </Link>
           
           
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative rounded-full p-2 transition-colors hover:bg-gray-100"
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              {isOpen && (
                <div className="absolute right-0 z-20 mt-2 w-80 overflow-hidden rounded-lg border bg-white shadow-lg md:w-96">
                  <div className="flex items-center justify-between border-b p-4">
                    <h2 className="font-semibold text-gray-800">Notifications</h2>
                    <button onClick={() => {}} className="text-sm text-blue-500 transition-colors hover:text-blue-600">
                      Clear all
                    </button>
                  </div>
                  <div className="max-h-96 overflow-hidden">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="border-b p-4 transition-colors hover:bg-gray-50">
                        <div className="flex gap-3">
                          {notification.type !== 'event' ? (
                            <img src="/image/3504bec22d3fe96515e7c73aeadb9d13.jpg" alt="" className="h-10 w-10 rounded-full" />
                          ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                              <span className="text-xl text-blue-500">G</span>
                            </div>
                          )}

                          <div className="flex-1">
                            <p className="text-sm text-gray-800">
                              <span className="font-medium">{notification.user}</span> {notification.message}
                              {notification.linkText && <span className="text-blue-500"> {notification.linkText}</span>}
                            </p>
                            <span className="text-xs text-gray-400">{notification.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/editprofile"
              className="hidden cursor-pointer items-center gap-2 rounded-lg p-2 transition-all hover:bg-gray-50 sm:flex"
            >
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="h-8 w-8 rounded-full border-2 border-transparent transition-all hover:border-orange-500"
              />
              <div className="hidden md:block">
                <p className="text-sm font-medium">Moni Roy</p>
                <p className="text-xs text-gray-500">admin</p>
              </div>
            </Link>
          </div>
        </header>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 m-2">
          <div className="container  px-6 py-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-semibold text-gray-900">Request Tracking</h1>
              <button onClick={handleCreateIncome} className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                <Plus className="inline-block w-5 h-5 mr-2" />
                Create Request
              </button>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Requester Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Request Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Request Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Unit Number
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priority
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {complaints.map((complaint) => (
                    <tr key={complaint.id} className='hover:bg-gray-50 transition-colors duration-150'>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={complaint.requester.avatar} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{complaint.requester.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{complaint.requestName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <div className="text-sm text-gray-500 max-w-xs truncate">{complaint.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{complaint.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{complaint.unitNumber}</div>
                        <div className="text-sm text-gray-500">{complaint.unitId}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityStyles(complaint.priority)}`}>
                          {complaint.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyles(complaint.status)}`}>
                          {complaint.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={handleEditIncome} className="text-green-600 hover:text-green-900 mr-2">
                          <PencilIcon className="h-5 w-5" />
                          <span className="sr-only">Approve</span>
                        </button>
                        <button onClick={handleViewIncome} className="text-blue-600 hover:text-blue-900 mr-2">
                          <Eye className="h-5 w-5" />
                          <span className="sr-only">View</span>
                        </button>
                        <button onClick={handleDeleteIncome} className="text-red-600 hover:text-red-900">
                          <Trash className="h-5 w-5" />
                          <span className="sr-only">Delete</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Create Request</h2>
          
          
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <label className="block text-sm font-medium">
          Requester Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={requesterName}
          onChange={(e) => setRequesterName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-medium">
          Request Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={requestName}
          onChange={(e) => setRequestName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-medium">
          Request Date<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="date"
            value={requestDate}
            onChange={(e) => setRequestDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium">
            Wing<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={wing}
            onChange={(e) => setWing(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-medium">
            Unit<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-medium">
          Priority<span className="text-red-500">*</span>
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="priority"
              value="high"
              checked={priority === "high"}
              onChange={(e) => setPriority(e.target.value)}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="ml-2 text-sm">High</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="priority"
              value="medium"
              checked={priority === "medium"}
              onChange={(e) => setPriority(e.target.value)}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="ml-2 text-sm">Medium</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="priority"
              value="low"
              checked={priority === "low"}
              onChange={(e) => setPriority(e.target.value)}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="ml-2 text-sm">Low</span>
          </label>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-medium">
          Status<span className="text-red-500">*</span>
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="status"
              value="open"
              checked={status === "open"}
              onChange={(e) => setStatus(e.target.value)}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="ml-2 text-sm">Open</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="status"
              value="pending"
              checked={status === "pending"}
              onChange={(e) => setStatus(e.target.value)}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="ml-2 text-sm">Pending</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="status"
              value="solve"
              checked={status === "solve"}
              onChange={(e) => setStatus(e.target.value)}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="ml-2 text-sm">Solve</span>
          </label>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="button"
          className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Create
        </button>
      </div>
    </form>
  
        </div>
          </div>
        </div>
      )}

{openEditModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Edit Request</h2>
          
          <form className="space-y-4" onSubmit={handleEditSubmit}>
      <div className="space-y-1.5">
        <label className="block text-sm font-medium">
          Requester Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={userFullName}
          onChange={(e) => setUserFullName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-medium">
          Request Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={issueTitle}
          onChange={(e) => setIssueTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-medium">
          Request Date<span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          value={submissionDate}
          onChange={(e) => setSubmissionDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium">
            Wing<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={departmentWing}
            onChange={(e) => setDepartmentWing(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-medium">
            Unit<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={unitNumber}
            onChange={(e) => setUnitNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-medium">
          Priority<span className="text-red-500">*</span>
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="priority"
              value="high"
              checked={urgencyLevel === "high"}
              onChange={() => setUrgencyLevel("high")}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="ml-2 text-sm">High</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="priority"
              value="medium"
              checked={urgencyLevel === "medium"}
              onChange={() => setUrgencyLevel("medium")}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="ml-2 text-sm">Medium</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="priority"
              value="low"
              checked={urgencyLevel === "low"}
              onChange={() => setUrgencyLevel("low")}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="ml-2 text-sm">Low</span>
          </label>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-medium">
          Status<span className="text-red-500">*</span>
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="status"
              value="open"
              checked={currentStatus === "open"}
              onChange={() => setCurrentStatus("open")}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="ml-2 text-sm">Open</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="status"
              value="pending"
              checked={currentStatus === "pending"}
              onChange={() => setCurrentStatus("pending")}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="ml-2 text-sm">Pending</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="status"
              value="solve"
              checked={currentStatus === "solve"}
              onChange={() => setCurrentStatus("solve")}
              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
            />
            <span className="ml-2 text-sm">Solve</span>
          </label>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button onClick={()=>setOpenEditModal(false)}
          type="button"
          className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </form>
        </div>
          </div>
        </div>
      )}

{openViewModel && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="relative p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">View Complaint</h2>
            <button onClick={()=> setOpenViewModal(false)} className="text-gray-400 hover:text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </button>
          </div>

          <div className="flex items-center space-x-3 mb-6">
            <img
              src="/placeholder.svg?height=48&width=48"
              alt="Evelyn Harper"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">Evelyn Harper</h3>
              <p className="text-sm text-gray-500">Aug 5, 2024</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500">Request Name</label>
              <p className="text-gray-900">Unethical Behavior</p>
            </div>

            <div>
              <label className="block text-sm text-gray-500">Description</label>
              <p className="text-gray-900">
                Offering, giving, receiving, or soliciting of value to influence the actions of an.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sm text-gray-500">Wing</label>
                <p className="text-gray-900">A</p>
              </div>
              
              <div>
                <label className="block text-sm text-gray-500">Unit</label>
                <p className="text-gray-900">1002</p>
              </div>
              
              <div>
                <label className="block text-sm text-gray-500">Priority</label>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Medium
                </span>
              </div>
              
              <div>
                <label className="block text-sm text-gray-500">Status</label>
                <span className="text-blue-600">Open</span>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      )}

{openDeleteModel && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Delete Request?</h2>
          
          <p className="text-gray-500">
            Are you sure you want to delete this Request?
          </p>
          
          <div className="flex gap-4 pt-2">
            <button onClick={()=>setOpenDeleteModel(false)}
              type="button"
              className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex-1 px-4 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Delete
            </button>
          </div>
        </div>
          </div>
        </div>
      )}
    
     

    

    
    
     </>
  )
}

export default RequestTracking