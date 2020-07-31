/* eslint-disable react/jsx-key */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

const columns = [
  { label: 'Name', id: 'customerName', minWidth: 170 },
  { label: 'Phone Number', id: 'phoneNumber', minWidth: 170 },
  { label: 'Email', id: 'email', minWidth: 170 },
  {
    label: 'Brand',
    id: 'bikeBrand',
    minWidth: 170,
  },
  { label: 'Service', id: 'typeOfService', minWidth: 170 },
  { label: 'Due date', id: 'dueDate', minWidth: 170 },
  { label: 'Comments', id: 'comment', minWidth: 170 },
]

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
})

const Users = ({ users, deleteButton }) => {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id]
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteButton(row)}
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
export default Users
/*
const User = ({ user, deleteFunction }) => {
  const [detailVisible, setDetatilVisible] = useState(false)

  const completeInfo = { display: detailVisible ? '' : 'none' }

  const toggleVisibility = () => {
    setDetatilVisible(!detailVisible)
  }
  return (
    <table>
      <tbody>
        <tr>
          <th>{user.customerName}</th>
          <th>
            <button onClick={toggleVisibility}>{detailVisible ? 'hide' : 'visible'}</button>
          </th>
        </tr>
      </tbody>
      <tbody style={completeInfo}>
        <tr>
          <th>Phone Number : {user.phoneNumber}</th>
        </tr>
        <tr>
          <th>Email: {user.email}</th>
        </tr>
        <tr>
          <th>Bike Brand: {user.bikeBrand}</th>
        </tr>
        <tr>
          <th>Type Of Service: {user.typeOfService}</th>
        </tr>
        <tr>
          <th>Due Date: {user.dueDate}</th>
        </tr>
        <tr>
          <th>comment: {user.comment}</th>
        </tr>
        <tr>
          <th>
            <button onClick={deleteFunction}>Delete</button>
          </th>
        </tr>
      </tbody>
    </table>
  )
}
const Users = ({ users, searchString, deleteButton }) => {
  if (users.length === 0) {
    return null
  }
  const filteredUsers =
    searchString === ''
      ? users
      : users.filter((u) => u.customerName.toLowerCase().includes(searchString.toLowerCase()))

  const rows = () =>
    filteredUsers.map((user) => (
      <User user={user} key={user.id} deleteFunction={() => deleteButton(user)} />
    ))
  return (
    <div>
      <h2>Details</h2>
      {rows()}
    </div>
  )
}

export default Users

    */
