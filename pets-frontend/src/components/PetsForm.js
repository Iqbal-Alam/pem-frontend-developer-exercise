import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPets } from '../services/actions';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


class PetsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            type: '',
            summary: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        const petsPostData = {
            name: this.state.name,
            type: this.state.type,
            summary: this.state.summary
        }
        this.props.createPets(petsPostData);
        console.log('=== after submit ====', this.state, this.props);
    }
    render() {
        return (
            <Box component="form" onSubmit={this.onSubmit}>
                <Card >
                    <CardContent>
                        <Grid container spacing={2} sx={{ p: 2 }}>
                            <Grid item xs={12} textAlign="center">
                                <Typography variant="h5" component="div" color="text.secondary" gutterBottom>Create Pets</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth id="pets_name" label="Pets name" name="name" variant="outlined" onChange={this.onChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth id="pets_type" label="Pets type" name="type" variant="outlined" onChange={this.onChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth id="summary" label="Summary" name="summary" variant="outlined" onChange={this.onChange} />
                            </Grid>
                            <Grid item xs={12} textAlign="center">
                                <Button type="submit" variant="contained" >Add Pets</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        )
    }
}

// map state to props
const mapStateToProps = state => ({
    pets: state.pets.item
})

export default connect(mapStateToProps, { createPets })(PetsForm);
