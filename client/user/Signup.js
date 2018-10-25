import React, {Component} from 'react'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {create} from './api-user.js'
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog'
import {Link} from 'react-router-dom'


const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 2
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 2
  }
})

class Signup extends Component {
  state = {
      name: '',
      password: '',
      email: '',
      open: false,
      error: ''
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value})
  }

  clickSubmit = () => {
    const user = {
      name: this.state.name || undefined,
      email: this.state.email || undefined,
      password: this.state.password || undefined
    }
    create(user).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        this.setState({error: '', open: true})
      }
    })
  }

  render() {
    const {classes} = this.props
    return (<div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h2" className={classes.title}>
            Find Your Code Mate
          </Typography>
          <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal"/><br/>
          <TextField id="email" type="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
          <TextField id="password" type="password" label="Password" className={classes.textField} value={this.state.password} onChange={this.handleChange('password')} margin="normal"/>
          <br/> {
            this.state.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {this.state.error}</Typography>)
          }
          <br/>
          <div className="container">

            <h4>Survey Questions</h4>
            <hr/>

            <h5>Question 1</h5>
            <h6>Your mind is always buzzing with unexplored ideas and plans.</h6>
            <select data-placeholder="" className="chosen-select" id="q1">
                <option value=""></option>
                <option value="1">1 (Strongly Disagree)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Strongly Agree)</option>
            </select>

            <h5>Question 2</h5>
            <h6>Generally speaking, you rely more on your experience than your imagination.</h6>
            <select data-placeholder="" className="chosen-select" id="q2">
                <option value=""></option>
                <option value="1">1 (Strongly Disagree)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Strongly Agree)</option>
            </select>

            <h5>Question 3</h5>
            <h6>You find it easy to stay relaxed and focused even when there is some pressure.</h6>
            <select data-placeholder="" className="chosen-select" id="q3">
                <option value=""></option>
                <option value="1">1 (Strongly Disagree)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Strongly Agree)</option>
            </select>

            <h5>Question 4</h5>
            <h6>You rarely do something just out of sheer curiosity.</h6>
            <select data-placeholder="" className="chosen-select" id="q4">
                <option value=""></option>
                <option value="1">1 (Strongly Disagree)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Strongly Agree)</option>
            </select>

            <h5>Question 5</h5>
            <h6>People can rarely upset you.</h6>
            <select data-placeholder="" className="chosen-select" id="q5">
                <option value=""></option>
                <option value="1">1 (Strongly Disagree)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Strongly Agree)</option>
            </select>

            <h5>Question 6</h5>
            <h6>It is often difficult for you to relate to other people’s feelings.</h6>
            <select data-placeholder="" className="chosen-select" id="q6">
                <option value=""></option>
                <option value="1">1 (Strongly Disagree)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Strongly Agree)</option>
            </select>

            <h5>Question 7</h5>
            <h6>In a discussion, truth should be more important than people’s sensitivities.</h6>
            <select data-placeholder="" className="chosen-select" id="q7">
                <option value=""></option>
                <option value="1">1 (Strongly Disagree)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Strongly Agree)</option>
            </select>

            <h5>Question 8</h5>
            <h6>You rarely get carried away by fantasies and ideas.</h6>
            <select data-placeholder="" className="chosen-select" id="q8">
                <option value=""></option>
                <option value="1">1 (Strongly Disagree)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Strongly Agree)</option>
            </select>

            <h5><strong>Question 9</strong></h5>
            <h6>You think that everyone’s views should be respected regardless of whether they are supported by facts or not.</h6>
            <select data-placeholder="" className="chosen-select" id="q9">
                <option value=""></option>
                <option value="1">1 (Strongly Disagree)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Strongly Agree)</option>
            </select>

            <h5><strong>Question 10</strong></h5>
            <h6>You feel more energetic after spending time with a group of people.</h6>
            <select data-placeholder="" className="chosen-select" id="q10">
                <option value=""></option>
                <option value="1">1 (Strongly Disagree)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Strongly Agree)</option>
            </select>
            <br/>
          </div>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="raised" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
        </CardActions>
      </Card>
      <Dialog open={this.state.open} disableBackdropClick={true}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New geek successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/signin">
            <Button color="primary" autoFocus="autoFocus" variant="raised">
              Compile Profile
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>)
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Signup)
