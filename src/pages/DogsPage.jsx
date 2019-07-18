import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { getAllDogs } from '../services/DogsService'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import LoadDialog from '../components/commons/Loads/LoadDialog';
import { Typography, Avatar } from '@material-ui/core';
import { If } from 'babel-plugin-jsx-control-statements';


const styles = theme => ({
    textField:{
        width:'100%'
    },
    btn:{
        width:'100%'
    },
    grid: {
       
    },
    paper:{
        width:'100%',
        padding: 16
    },
    titulo: {
        textAlign:'center',
        width:'100%',
    }
});

class DogsPage extends Component {   
    constructor(props) {
        super(props);
        this.state = {
           dogs: [],
           load: true,
        }
    }
    
    componentDidMount() {
        this.getAllDogs();
    };

    getAllDogs = () => {
        getAllDogs().then(res => {
            this.setState({ load: false});
        }).catch( error => {
            this.setState({ load: false});
        });
    }

    render (){
        const { load, dogs } = this.state;
        const { classes } = this.props
        return (
            <Fragment>
                <LoadDialog action={load} />
                    { dogs.length > 0 ? (
                        <Fragment> 
                        <Grid container justify="center" alignContent="center" spacing={1} className={classes.grid}>
                            {dogs.map( dog => (
                                <Grid container item xs={12} md={3} sm={4}>
                                
                                        <Card className={classes.card}>
                                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                                R
                                            </Avatar>
                                        </Card>
                                    </Grid>
                            ))}
                            
                        </Grid>

                        </Fragment>  
                    ): (
                        ''
                    ) }
                        
             
            </Fragment>
        )
    }
}

export default withStyles(styles)(withRouter(DogsPage));
