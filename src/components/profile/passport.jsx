import React from 'react'
import './style.scss'
import {useSelector} from "react-redux";
import {Avatar} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export default function Passport() {
    const user = useSelector(state => state.user)
        return (
            <Container maxWidth="xs" color="primary" style={{"backgroundColor": "red"}}>
                <Grid container>
                    <Grid item>
                        <Avatar style={{height:60, width:60}} alt={`${user.firstName} ${user.lastName}`} src="https://material-ui.com/static/images/avatar/1.jpg"/>
                    </Grid>
                    <Grid item>
                        <div>{user.firstName} {user.lastName}</div>
                        <div>{user.affiliation}</div>
                    </Grid>
                </Grid>

            </Container>
        )



}