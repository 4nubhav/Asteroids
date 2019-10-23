import React, {useEffect, useState} from "react";
import './css/AsteroidList.css'
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import AsteroidListItem from "./AsteroidListItem";
import Typography from "@material-ui/core/Typography";
import {Paper} from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

function AsteroidList() {
    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        const today = new Date();
        const fullDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        axios.get(`https://secret-meadow-61226.herokuapp.com?date=${fullDate}`)
            .then(res => {
                setRes(res.data.near_earth_objects[fullDate]);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const asteroidList = res.map((n, index) => <AsteroidListItem key={index}
                                                                 index={index}
                                                                 asteroid={n}/>);

    const PotentiallyHazardous = () => {
        let hazardList = res.filter(asteroid => asteroid.is_potentially_hazardous_asteroid === true);
        hazardList = hazardList.map(n => n.name);
        hazardList = hazardList.map((n, index) => <li key={index}><Typography variant="body2">{n}</Typography></li>);
        if (hazardList.length === 0) {
            return (
                <Typography variant="body1">Potentially Hazardous: None</Typography>
            );
        }
        else {
            return (
                <>
                    <Typography variant="body1">Potentially Hazardous:</Typography>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>{hazardList}</ul>
                </>
            );
        }
    };

    if (loading) {
        return (
            <div id="progress" >
                <Typography variant="h5" color="textPrimary">LOADING...</Typography>
                <div className={classes.root}>
                    <LinearProgress color="primary"/>
                </div>
            </div>
        );
    }
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <div id='asteroid-list'>
                            <Paper id='header-paper'>
                                <Typography variant="h4" align="center" gutterBottom>{`Asteroids Today: ${res.length}`}</Typography>
                                <PotentiallyHazardous/>
                            </Paper>
                            {asteroidList}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default AsteroidList;
