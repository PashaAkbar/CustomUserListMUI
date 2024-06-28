/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Pagination,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';

const UserTable = ({users, setCurrentUser, setIsModalOpen}) => {
  console.log(users);
  const handleEditUser = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };
  return (
    <div className="bg-white p-4 rounded-md shadow-xl border-2 border-gray-200">
      <TableContainer component={Paper} style={{marginTop: '20px'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={user.id}
                className={index % 2 !== 0 ? 'bg-gray-100' : ''}
              >
                <TableCell>
                  <img
                    className="rounded-xl"
                    src={`https://i.pravatar.cc/50?img=${user.id}`}
                    alt=""
                  />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <IconButton className="fill-gray-200">
                    <ArticleIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleEditUser(user)}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(users.length / 10)}
        variant="outlined"
        shape="rounded"
        style={{marginTop: '20px'}}
      />
    </div>
  );
};

export default UserTable;
