import {useState} from 'react';
import UserTable from './UserTable';
import UserModal from './UserModal';
import {TextField} from '@mui/material';
import {InputAdornment} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import SearchIcon from '@mui/icons-material/Search';
const initialUsers = [
  {
    id: 1,
    name: 'Eleanor Pena',
    phone: '(205) 555-0100',
    address: '3517 W. Gray St. Utica, Pennsylvania 57867',
    email: 'cikarakcak@gmail.com',
  },
  {
    id: 2,
    name: 'Ronald Richards',
    phone: '(205) 555-0100',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    email: 'cikarakcak@gmail.com',
  },
  {
    id: 3,
    name: 'Darlene Robertson',
    phone: '(209) 555-0104',
    address: '4140 Parker Rd. Allentown, New Mexico 31134',
    email: 'cikarakcak@gmail.com',
  },
  {
    id: 4,
    name: 'Kristin Watson',
    phone: '(252) 555-0126',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    email: 'cikarakcak@gmail.com',
  },
  {
    id: 5,
    name: 'Dianne Russell',
    phone: '(201) 555-0124',
    address: '4517 Washington Ave. Manchester, Kentucky 39495',
    email: 'cikarakcak@gmail.com',
  },
  {
    id: 6,
    name: 'Eleanor Pena',
    phone: '(205) 555-0100',
    address: '3517 W. Gray St. Utica, Pennsylvania 57867',
    email: 'cikarakcak@gmail.com',
  },
  {
    id: 7,
    name: 'Ronald Richards',
    phone: '(205) 555-0100',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    email: 'cikarakcak@gmail.com',
  },
  {
    id: 8,
    name: 'Darlene Robertson',
    phone: '(209) 555-0104',
    address: '4140 Parker Rd. Allentown, New Mexico 31134',
    email: 'cikarakcak@gmail.com',
  },
  {
    id: 9,
    name: 'Kristin Watson',
    phone: '(252) 555-0126',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    email: 'cikarakcak@gmail.com',
  },
  {
    id: 10,
    name: 'Dianne Russell',
    phone: '(201) 555-0124',
    address: '4517 Washington Ave. Manchester, Kentucky 39495',
    email: 'cikarakcak@gmail.com',
  },
];

const UserList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddUser = () => {
    setCurrentUser(null);
    console.log(currentUser, 'currentUser');
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (user) => {
    if (currentUser) {
      // Update existing user
      setUsers(
        users.map((u) => (u.id === currentUser.id ? {...u, ...user} : u))
      );
    } else {
      // Add new user
      setUsers([...users, {...user, id: users.length + 1}]);
    }
    setIsModalOpen(false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(isModalOpen, 'isModalOpen');

  return (
    <div className="w-full bg-white px-6 py-10 flex flex-col gap-3">
      <UserModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
        user={currentUser}
      />
      <div className="text-3xl">User List</div>
      <section className="flex justify-between">
        <button
          className="flex flex-row px-3 py-2 h-min gap-2 bg-orange-500 hover:bg-orange-600 rounded-md"
          onClick={handleAddUser}
        >
          <div>+</div>
          <div>Add User</div>
        </button>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="">Search User</label>
            <div className="flex flex-row items-center justify-center gap-2">
              <TextField
                placeholder="Enter User Name"
                variant="outlined"
                className=""
                margin="normal"
                value={searchTerm}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <div className="flex flex-row px-3 py-2 gap-2 cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-md">
                <FilterAltIcon />
                <div>Filter</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UserTable
        users={filteredUsers}
        setUsers={setUsers}
        setCurrentUser={setCurrentUser}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default UserList;
