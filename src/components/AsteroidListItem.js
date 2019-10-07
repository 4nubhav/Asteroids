import React from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function AsteroidListItem(props) {
    const approachTime = (date_full) => date_full === null ? 'Unknown' : `${date_full.split(' ')[1]} hrs`;

    return(
        <>
            <ExpansionPanel style={props.asteroid
                .is_potentially_hazardous_asteroid === true ? { backgroundColor: '#673AB7' } : {}}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="body1">{`${props.asteroid.name}`}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                {'ID: '}
                                <Link href={`https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=${props.asteroid.id};old=0;orb=1;cov=0;log=0;cad=0#orb`}
                                      variant="inherit"
                                      style={{ color: '#09D3AC' }}>
                                    {props.asteroid.id}
                                </Link>
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                {`Close approach: ${approachTime(props.asteroid.close_approach_data[0]
                                    .close_approach_date_full)}`}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                {`Diameter: ${parseFloat(props.asteroid.estimated_diameter.meters
                                    .estimated_diameter_min).toLocaleString()} m - ${parseFloat(props.asteroid
                                    .estimated_diameter.meters.estimated_diameter_max).toLocaleString()} m`}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                {`Relative Velocity: ${parseFloat(props.asteroid.close_approach_data[0]
                                    .relative_velocity.kilometers_per_second).toLocaleString()} km/s`}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                {`Miss Distance: ${parseFloat(props.asteroid.close_approach_data[0]
                                    .miss_distance.kilometers).toLocaleString()} km`}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                {`Orbiting Body: ${props.asteroid.close_approach_data[0].orbiting_body}`}
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                {`Potentially Hazardous: ${props.asteroid
                                    .is_potentially_hazardous_asteroid === true ? 'Yes' : 'No'}`}
                            </Typography>
                        </li>
                    </ul>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </>
    );
}

export default AsteroidListItem;
