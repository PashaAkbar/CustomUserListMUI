/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';

const UserModal = ({isOpen, onClose, onSubmit, user}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
  });
  console.log(user, 'user');

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        phone: user.phone,
        address: user.address,
        email: user.email,
      });
    } else {
      setFormData({
        name: '',
        phone: '',
        address: '',
        email: '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-end z-50">
      <div
        className="bg-gray-600 bg-opacity-50 w-full h-full"
        onClick={onClose}
      ></div>
      <div className="bg-white h-full p-6 shadow-lg w-1/3">
        <h2 className="text-2xl mb-4">{user ? 'Edit User' : 'Add User'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {user ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
