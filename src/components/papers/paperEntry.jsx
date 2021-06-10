import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";


export default function PaperEntry(props) {
    const {title} = props.paper
    const {reference} = props.paper
    console.log(reference.links)

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    <div><Link to={`/read/${props.paper._id}`}>{title}</Link> ({props.paper.thread_count} threads)</div>
                </Typography>
                <Typography color="textSecondary">
                    {reference.authors.map(a=>
                        <span>{a.family}, {a.given}{a.sequence=="first"?"*":""}</span>
                    )}
                </Typography>
                {reference.links.map(l=>
                    <div><a target="_blank" href={l["URL"]}>Get PDF</a></div>
                )}
            </CardContent>
            <CardActions>
                <a target="_blank" href={reference["URL"]}> <Button size="small">Go to Journal</Button></a>
            </CardActions>
        </Card>

    )
}