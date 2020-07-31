/*
Customer name
Phone number
Email
Bike brad
Type of service
 Expected due date
Notes for extra information if needed
The web application should support the following tasks:
Place a maintenance order for a customer
Find a maintenance order for a customer
Edit an existing maintenance order
Delete a maintenance order

<Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/services">
          <Service />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {customer === null ? (
          <div>
            <h2>Maintenance Order Form</h2>
            <Notification message={message} messageType={messageType} />
            {loginForm()}
          </div>
        ) : (
          <div>
            <Notification message={message} messageType={messageType} />
            <p>
              {customer.name} logged in
              <button onClick={handleLogout}>Logout</button>
            </p>
            {orderForm()}
            <h1>Filter shown with </h1>
            <input value={searchString} onChange={handleSearchStringChange} />
            <h1>Users</h1>
            <Users users={users} searchString={searchString} deleteButton={deleteButton} />
          </div>

*/
