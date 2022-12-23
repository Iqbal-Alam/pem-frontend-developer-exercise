import React, {Component} from 'react';
import { connect } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchPets } from '../services/actions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

class Pets extends Component{

    createData(id, name, type, summary) {
        return { id, name, type, summary };
    }
    componentDidMount(){
        this.props.fetchPets();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.createPets){
            this.props.pets.unshift(nextProps.createPets);
        }
    }
    render(){
        const rows = this.props.pets.map(pet=>(
            this.createData(pet.id, pet.name, pet.type, pet.summary)
        ));
        return(
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography align='center' variant="h5" component="div" color="text.secondary" gutterBottom>
                        Pets Display View
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Summary</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell >{row.id}</TableCell>
                                <TableCell align="right" component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{row.summary}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
            
        )
    }
}

// map state to props
const mapStateToProps = state => ({
    pets: state.pets.items
})

export default connect(mapStateToProps,{fetchPets})(Pets);