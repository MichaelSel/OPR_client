import React, {useEffect, useState} from 'react';
import Chip from "@material-ui/core/Chip";
import {yellow,red,green} from "@material-ui/core/colors";
import {FormatBold} from "@material-ui/icons";
import Tooltip from '@material-ui/core/Tooltip';



const reactStringReplace = require('react-string-replace')

function PostParser(props) {

    const [footnotes,setFootnotes] = useState([])

    function parseHashtags (content) {
        return reactStringReplace(content, /(?<!#)#(\w+)/g, (match, i) => {
            let color = "default"
            if(match=="warning") color="secondary"
            else if(match=="clarification") color="primary"
            return (
            <Chip color={color} size="small" label={match} key={match + i} />
        )});
    }
    function parseBold (content) {
        return reactStringReplace(content, /\*\*(.+?)\*\*/gm, (match, i) => {
            return (
                <b  key={match + i}>{match}</b>
            )});
    }
    function parseItalics (content) {
        return reactStringReplace(content, /\/\/(.+?)\/\//gm, (match, i) => {
            return (
                <i  key={match + i}>{match}</i>
            )});
    }

    function someFunction (val) {
        setFootnotes([1])

    }

    function parseFootnote (content) {
        let counter = 0
        return reactStringReplace(content, /\[\[(.+?)\]\]/gm, (match, i) => {
            counter++
            return (
                <Tooltip key={match + i} title={match}>
                    <sup key={match + i}>{counter}</sup>
                </Tooltip>

            )});
    }

    function parseBullet (content) {
        return reactStringReplace(content, /((^-\s.+(\n|$))+)/gm, (match, i) => {
            match = match.split(/^-/gm).map(el=>el.trim()).filter(el=>el!="")
            if(match.length==0) return false

            return (
                {content}
                // <ul key={match+i}>
                //     {match.map((el,i)=>
                //         <li key={el+i}>{el}</li>
                //     )}
                // </ul>
            )});
    }

    function parseLine (content) {
        return reactStringReplace(content, /(^-\-\-+$)/m, (match, i) => {
            return (
                <hr  key={Math.random()} />
            )});
    }

    function parseNumberedList (content) {
        return reactStringReplace(content, /(\d+\.\s.+)/gm, (match, i) => {
            const parts = match.split(/\.(.+)/)
            const number = parts[0]
            const text = parts[1]
            return (
                {content}
                // <ol key={match + i}>
                //     <li key={match + i} value={number}>{text}</li>
                // </ol>
            )});
    }

    function parseHeading1 (content) {
        return reactStringReplace(content, /^###(.+)###$/gm, (match, i) => {
            return (
                <h1 key={match + i}>{match}</h1>
            )});
    }
    function parseHeading2 (content) {
        return reactStringReplace(content, /^##([^#].+)(?<!#)##$/gm, (match, i) => {
            return (
                <h2 key={match + i}>{match}</h2>
            )});
    }

    function parseInlineCode (content) {
        return reactStringReplace(content, /`([^`].+)(?<!`)`/gm, (match, i) => {
            return (
                <code key={match + i}>{match}</code>
            )});
    }

    function parseMultiLineCode (content) {
        return reactStringReplace(content, /```(.+)```/gms, (match, i) => {
            return (
                <pre key={match + i} style={{"backgroundColor":"black","color":"white"}}><code key={match + i}>{match}</code></pre>
            )});
    }

    function parseText (c) {
        c = parseHashtags(c)
        c = parseBold(c)
        c = parseItalics(c)
        c = parseFootnote(c)
        c = parseBullet(c)
        c = parseLine(c)
        c = parseNumberedList(c)
        c = parseHeading1(c)
        c = parseHeading2(c)
        c = parseInlineCode(c)
        c = parseMultiLineCode(c)
        return c

    }

    //TODO: V **BOLD**
    //TODO: V //Italics//
    //TODO: V [[Footnote]] (make footnotes)
    //TODO: V {{Citation}} (make bibliography)
    //TODO: auto link: http://www.michaelseltenreich.com
    //TODO: formatted link: [description]http://www.michaelseltenreich.com
    //TODO: V -Bullet point
    //TODO: V --- (seperating line)
    //TODO: V 1. Numbered list
    //TODO: V ##Heading## / ###Bigger Heading###
    //TODO: V #Tag
    //TODO: @mention
    //TODO: V inline `code`
    //TODO: V ```Code region start Code region end.```

    return (
        <div>
            {parseText(props.children)}
        </div>
    )
}

export default PostParser;