import React, { useState } from 'react'
import { Bell, PencilIcon, Eye, MoreVertical, Plus, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'
import Aside from './Aside'

const complaints = [
  {
    id: '1001',
    complainer: {
      name: 'Evelyn Harper',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    type: 'Unethical Behavior',
    description: 'Providing false information or deliberately.',
    unitNumber: 'A',
    unitId: '1001',
    priority: 'Medium',
    status: 'Pending',
  },
  {
    id: '1002',
    complainer: {
      name: 'Esther Howard',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    type: 'Preventive Measures',
    description: 'Regular waste collection services.',
    unitNumber: 'B',
    unitId: '1002',
    priority: 'Low',
    status: 'Open',
  },
  {
    id: '1003',
    complainer: {
      name: 'Jenny Wilson',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    type: 'Unethical Behavior',
    description: 'Designated garages for residents and guests.',
    unitNumber: 'C',
    unitId: '1003',
    priority: 'High',
    status: 'Solve',
  },
  {
    id: '1004',
    complainer: {
      name: 'Guy Hawkins',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    type: 'Preventive Measures',
    description: 'The celebration of Ganesh Chaturthi involves.',
    unitNumber: 'D',
    unitId: '1004',
    priority: 'Medium',
    status: 'Pending',
  },
]

function CreateComplain() {
  const [isOpen, setIsOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openEditModel, setOpenEditModal] = useState(false)
  const [openViewModel, setOpenViewModal] = useState(false)
  const [openDeleteModel, setOpenDeleteModel] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    dueDate: '',
    description: '',
    amount: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddModel = () => {
    setOpenModal(true)
  }
  const handleEditModel = () => {
    setOpenEditModal(true)
  }
  const handleViewModel = () => {
    setOpenViewModal(true)
  }
  const handleDeleteModel = () => {
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
    <div>
      <Aside />
      <div className="main">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4 shadow-sm">
          <div className="flex flex-1 items-center">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Home</span>
              <span className="text-gray-500">/</span>
              <Link
                className={`text-gray-500 ${
                  window.location.pathname === '/financial' ? 'font-bold' : 'text-gray-600'
                }`}
                to={'/financial'}
              >
                {' '}
                Maintenance
              </Link>
              <span className="text-gray-500">/</span>
              <Link
                className={`text-blue-500 ${window.location.pathname === '/note' ? 'font-bold' : 'text-gray-600'}`}
                to={'/otherincome'}
              >
                {' '}
                Note
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
        <div className="container p-2">
          <div className="min-h-screen overflow-hidden bg-gray-50 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">Create Complaint</h1>
              <button onClick={handleAddModel} className="rounded-lg bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600">
                <Plus className="mr-2 inline-block h-4 w-4" />
                Create Complaint
              </button>
            </div>

            <div className="overflow-x-auto rounded-lg border bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Complainer Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Complaint Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Unit Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Priority
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {complaints.map((complaint) => (
                    <tr key={complaint.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <img
                            className="h-8 w-8 rounded-full object-cover"
                            src={complaint.complainer.avatar}
                            alt={complaint.complainer.name}
                          />
                          <span className="ml-2 text-sm font-medium text-gray-900">{complaint.complainer.name}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{complaint.type}</td>
                      <td className="max-w-xs truncate px-6 py-4 text-sm text-gray-500">{complaint.description}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium text-gray-900">{complaint.unitNumber}</span>
                          <span className="text-sm text-gray-500">{complaint.unitId}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getPriorityStyles(
                            complaint.priority
                          )}`}
                        >
                          {complaint.priority}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusStyles(
                            complaint.status
                          )}`}
                        >
                          {complaint.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right">
                        <div className="flex justify-end space-x-2">
                          <button onClick={handleEditModel} className="rounded p-1 text-green-600 hover:bg-green-50">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button onClick={handleViewModel}  className="rounded p-1 text-blue-600 hover:bg-blue-50">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button onClick={handleDeleteModel} className="rounded p-1 text-red-600 hover:bg-red-50">
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Create Complaint  </h2>
          
          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">
                Requester Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
              
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
               
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium">
                Priority<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4 ">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priority"
                    value="high"
                    className="w-4 h-4  text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="ml-2 text-sm">High</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priority"
                    value="medium"
              
                    className="w-4 h-4 text-
                    orange border-gray-300 focus:ring-orange"
                  />
                  <span className="ml-2 text-sm">Medium</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priority"
                    value="low"
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
                  
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="ml-2 text-sm">Open</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="pending"
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="ml-2 text-sm">Pending</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="solve"
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="ml-2 text-sm">Solve</span>
                </label>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <button onClick={()=> setOpenModal(false)}
                type="button"
                className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
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



      {openEditModel && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Edit Complaint</h2>
          
          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">
                Complainer Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="Evelyn Harper"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">
                Complaint Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="Unethical Behavior"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                defaultValue="The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in Resident."
                rows={3}
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
                  defaultValue="A"
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
                  defaultValue="1001"
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
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="ml-2 text-sm">High</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priority"
                    value="medium"
                    defaultChecked
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="ml-2 text-sm">Medium</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priority"
                    value="low"
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
                    defaultChecked
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="ml-2 text-sm">Open</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="pending"
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="ml-2 text-sm">Pending</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="solve"
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="ml-2 text-sm">Solve</span>
                </label>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <button onClick={()=> setOpenEditModal(false)}
                type="button"
                className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </form>
        </div>
          </div>
        </div>
      )}

{openDeleteModel && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Delete Complain?</h2>
          
          <p className="text-gray-500">
            Are you sure you want to delete this Complain?
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
    </div>
  )
}

export default CreateComplain