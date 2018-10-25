import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Background from './../assets/images/background.jpg'
import {Link} from 'react-router-dom'
import Grid from 'material-ui/Grid'
import auth from './../auth/auth-helper'
import FindPeople from './../user/FindPeople'
import Newsfeed from './../post/Newsfeed'
import Chat from "../user/Chat";

// require("../client");

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    minWidth: 400,
    maxHeight: 600,
    margin: 'auto',
    paddingTop: 0,
    paddingBottom: theme.spacing.unit*3
    // marginTop: theme.spacing.unit * 5
  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  chatTitle: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.openTitle,
    fontSize: '1em'
  },
  media: {
    minHeight: 600
  }
})

class Home extends Component {
  state = {
    defaultPage: true
  }
  init = () => {
    if(auth.isAuthenticated()){
      this.setState({defaultPage: false})
    }else{
      this.setState({defaultPage: true})
    }
  }
  componentWillReceiveProps = () => {
    this.init()
  }
  componentDidMount = () => {
    this.init()
  }
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        {this.state.defaultPage &&
          <Grid container spacing={24}>
            <Grid item xs={12}>
              {/* <Card className={classes.card}> */}
                <Typography type="headline" component="h2" className={classes.title}>

                </Typography>
                <CardMedia className={classes.media} image={Background} title="Love Hearts"/>
                <CardContent>
                  <Typography type="body1" component="p"> 
                  </Typography>
                </CardContent>
              {/* </Card> */}
              
            </Grid>
          </Grid>
        }

        {!this.state.defaultPage &&
          <Grid container spacing={24}>
            <Grid item xs>
              <Newsfeed/>
              
            </Grid>
            
            <Grid item xs>
              <FindPeople/>
              
            </Grid>
            <Grid item xs>
            <Card className={classes.card}>
              <Typography type="title" className={classes.chatTitle}>
                geekChat
              </Typography>
              <Chat/>
            </Card>
            </Grid>
            
            
          </Grid>
          
        }

        {/* <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 col-sm-12">
                    <h1 className="text-center">
                        GeekChat 
                        <button id="clear" className="btn btn-danger">Clear</button>
                    </h1>
                    <div id="status"></div>
                    <div id="chat">
                        <input type="text" id="username" className="form-control" placeholder="Enter name..."/>
                        <br/>
                        <div className="card">
                            <div id="messages" className="card-block">
    
                            </div>
                        </div>
                        <br/>
                        <textarea id="textarea" className="form-control" placeholder="Enter message..."></textarea>
                    </div>
                </div>
            </div>
        </div> */}
         
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
