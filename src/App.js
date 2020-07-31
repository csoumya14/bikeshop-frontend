import React, { useState, useEffect } from 'react'

import userService from './services/users'
import loginService from './services/login'
import signupService from './services/signup'
import Home from './components/Home'
import Menu from './components/Menu'
import Users from './components/Users'
import Notification from './components/Notification'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import OrderForm from './components/OrderForm'
import Togglable from './components/Togglable'
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { Container } from '@material-ui/core'

const App = () => {
  const [users, setUsers] = useState([])
  const [login, setLogin] = useState([])
  const [fullName, setFullName] = useState('')
  const [newUserName, setNewUserName] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newBrand, setNewBrand] = useState('')
  const [newDate, setNewDate] = useState('')
  const [newService, setNewService] = useState('')
  const [searchString, setSearchString] = useState('')
  const [message, setMessage] = useState(null)
  const [errors, setErrors] = useState(null)
  const [messageType, setMessageType] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [customer, setCustomer] = useState(null)
  const [comment, setComment] = useState('')
  const [signup, setSignup] = useState(false)

  useEffect(() => {
    console.log('effect')
    userService.getAll().then((initialUsers) => {
      console.log('promise fulfilled')
      setUsers(initialUsers)
    })
  }, [])

  useEffect(() => {
    console.log('effect')
    signupService.getAll().then((initialLogin) => {
      console.log('promise fulfilled')
      setLogin(initialLogin)
    })
  }, [])

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedUser')
    if (loggedUserJson) {
      const customer = JSON.parse(loggedUserJson)
      setCustomer(customer)
      userService.setToken(customer.token)
    }
  }, [])

  const resetNotification = () => {
    setMessage(null)
    setMessageType(null)
  }

  const showSuccessNotification = (message) => {
    setMessage(message)
    setMessageType('success')

    setTimeout(() => resetNotification(), 5000)
  }

  const showErrorNotification = (message) => {
    setMessage(message)
    setMessageType('error')
    setTimeout(() => resetNotification(), 3000)
  }

  const newOrder = (event) => {
    event.preventDefault()
    const orderObject = {
      customerName: newName,
      phoneNumber: newNumber,
      email: newEmail,
      bikeBrand: newBrand,
      typeOfService: newService,
      dueDate: newDate,
      id: users.length + 1,
      comment: comment,
    }
    const existingUser = users.find((u) => u.customerName.toLowerCase() === newName.toLowerCase())
    if (existingUser) {
      if (window.confirm(`${newName} is already added, replace the details?`)) {
        changeNumber(existingUser.id)
        showSuccessNotification(`The details of ${existingUser} has been changed`)
      }
    } else {
      userService.create(orderObject).then((returnedUser) => {
        setUsers(users.concat(returnedUser))
        showSuccessNotification(`Successfully added ${returnedUser.customerName}`)
        setNewName('')
        setNewNumber('')
        setNewEmail('')
        setNewBrand('')
        setNewDate('')
        setNewService('')
        setComment('')
      })
    }
  }

  const deleteButton = (user) => {
    if (window.confirm(`Delete ${user.customerName} ?`)) {
      userService
        .remove(user.id)
        .then(() => {
          setUsers(users.filter((u) => u.id !== user.id))
          showSuccessNotification(`Removed ${user.customerName}`)
        })
        .catch((error) => {
          setUsers(users.filter((u) => u.id !== user.id))
          showErrorNotification(
            `Information of ${user.customerName} has already been removed from the server`,
          )
        })
    }
  }
  const newSignUp = async (event) => {
    event.preventDefault()
    try {
      const signupObject = {
        username: newUserName,
        name: fullName,
        password: newPassword,
      }

      signupService.create(signupObject).then((returnedUser) => {
        setLogin(login.concat(returnedUser))
        showSuccessNotification(`New account created for ${signupObject.name}`)
        setFullName('')
        setNewUserName('')
        setNewPassword('')
        setSignup(!signup)
      })
    } catch (exception) {
      setErrors(exception)
      showErrorNotification('Wrong credentials')
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const customer = await loginService.login({
        username,
        password,
      })
      window.localStorage.setItem('loggedUser', JSON.stringify(customer))
      userService.setToken(customer.token)
      setCustomer(customer)

      setUsername('')
      setPassword('')
      setSignup(false)
    } catch (exception) {
      setErrors(exception)
      showErrorNotification('Wrong credentials')
    }
  }

  const changeNumber = (id) => {
    const user = users.find((u) => u.id === id)
    const newUserValues = {
      phoneNumber: newNumber,
      email: newEmail,
      bikeBrand: newBrand,
      typeOfService: newService,
      dueDate: newDate,
      comment: comment,
    }
    const changedUser = { ...user, ...newUserValues }

    userService.update(id, changedUser).then((returnedUser) => {
      setUsers(users.map((user) => (user.id !== id ? user : returnedUser)))
      setNewName('')
      setNewNumber('')
      setNewEmail('')
      setNewBrand('')
      setNewDate('')
      setNewService('')
      setComment('')
    })
  }

  const handleLogout = (async) => {
    window.localStorage.clear()
    userService.setToken(null)
    setCustomer(null)
  }

  const loginForm = () => (
    <LoginForm
      username={username}
      password={password}
      handleUsernameChange={({ target }) => setUsername(target.value)}
      handlePasswordChange={({ target }) => setPassword(target.value)}
      handleLogin={handleLogin}
    />
  )

  const orderForm = () => (
    <Togglable buttonLabel="Online maintenance order form">
      <OrderForm
        handleNameChange={({ target }) => setNewName(target.value)}
        handleNumberChange={({ target }) => setNewNumber(target.value)}
        handleEmailChange={({ target }) => setNewEmail(target.value)}
        handleBrandChange={({ target }) => setNewBrand(target.value)}
        handleServiceChange={({ target }) => setNewService(target.value)}
        handleDateChange={({ target }) => setNewDate(target.value)}
        handleComment={({ target }) => setComment(target.value)}
        newOrder={newOrder}
        newName={newName}
        newNumber={newNumber}
        newEmail={newEmail}
        newBrand={newBrand}
        newService={newService}
        newDate={newDate}
        comment={comment}
      />
    </Togglable>
  )
  const usersDetails = () => (
    <Togglable buttonLabel="Submitted Forms">
      <Users users={users} searchString={searchString} deleteButton={deleteButton} />
    </Togglable>
  )

  return (
    <Router>
      <Container>
        <Menu customer={customer} handleLogout={handleLogout} />

        <Switch>
          <Route path="/aboutUs">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/form">
            {customer ? (
              <div>
                <Notification message={message} messageType={messageType} />
                {orderForm()}
                {usersDetails()}
              </div>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/login">
            {customer ? (
              <Redirect to="/form" />
            ) : (
              <div>
                <Notification message={message} messageType={messageType} />
                {loginForm()}
              </div>
            )}
          </Route>
          <Route path="/signup">
            {signup ? (
              <div>
                <Redirect to="/login" />
                <Notification message={message} messageType={messageType} />
              </div>
            ) : (
              <SignUpForm
                fullName={fullName}
                newUserName={newUserName}
                newPassword={newPassword}
                newSignUp={newSignUp}
                handleNewUsernameChange={({ target }) => setNewUserName(target.value)}
                handleNewPasswordChange={({ target }) => setNewPassword(target.value)}
                handleFullNameChange={({ target }) => setFullName(target.value)}
              />
            )}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}
export default App

/*
<Router>
        <div>
          <Link style={padding} to="/">
            Home
          </Link>
          <Link style={padding} to="/aboutUs">
            About Us
          </Link>
          <Link style={padding} to="/services">
            Services
          </Link>
          <Link style={padding} to="/contact">
            Contact
          </Link>

          {customer ? (
            <div>
              <em>{customer.name} logged in</em>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <Link style={padding} to="/login">
              Login
            </Link>
          )}
        </div>
        */
