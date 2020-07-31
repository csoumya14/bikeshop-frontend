import React from 'react'
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '1px',
      width: '100%',
      borderStyle: 'solid',
    },
  },
  divElement: {
    border: '0.1rem outset ',

    borderRadius: '2px',

    padding: '1rem',
    outlineOffset: '0.5rem',
    margin: 'auto',
    marginTop: '50px',
    width: '40%',
  },
}))

const OrderForm = ({
  newOrder,
  newName,
  newNumber,
  newEmail,
  newBrand,
  newService,
  newDate,
  comment,
  handleNameChange,
  handleNumberChange,
  handleEmailChange,
  handleBrandChange,
  handleServiceChange,
  handleDateChange,
  handleComment,
}) => {
  const Options = ['wheel adjustment', 'chain replacement', 'brake maintenance']
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      <div className={classes.divElement}>
        <Grid item xs={12}>
          <h1>Maintenance order</h1>
        </Grid>
        <Grid item xs={12}>
          <ValidatorForm className={classes.root} onSubmit={newOrder}>
            <TextValidator
              label="Name"
              onChange={handleNameChange}
              name="name"
              value={newName}
              validators={['required', 'matchRegexp:^[a-zA-Z]+$']}
              errorMessages={['this field is required', 'Only letters']}
            />
            <TextValidator
              label="Phone Number"
              onChange={handleNumberChange}
              name="number"
              value={newNumber}
              validators={['required', 'matchRegexp:^[0-9\b]+$', 'maxStringLength:10']}
              errorMessages={['this field is required', 'Only Numbers', 'min length 10']}
            />
            <TextValidator
              label="Email"
              onChange={handleEmailChange}
              name="email"
              value={newEmail}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />

            <TextValidator
              label="Brand Name"
              onChange={handleBrandChange}
              name="brand"
              value={newBrand}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <SelectValidator
              label="Select service"
              name="Services"
              value={newService}
              onChange={handleServiceChange}
              SelectProps={{
                native: true,
              }}
              validators={['required']}
              errorMessages={['required']}
            >
              <option value=""></option>

              {Options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectValidator>
            <TextValidator
              id="date"
              label="Due Date"
              type="date"
              onChange={handleDateChange}
              value={newDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextValidator
              id="outlined-basic"
              label="Comments"
              variant="outlined"
              value={comment}
              onChange={handleComment}
            />

            <Button color="primary" variant="contained" onClick={newOrder}>
              Submit
            </Button>
          </ValidatorForm>
        </Grid>
      </div>
    </Grid>
  )
}

export default OrderForm
