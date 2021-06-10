import React, {useState} from 'react';
import DateFnsUtils from "@date-io/date-fns"; // import
import {useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
const PaperUploadForm = (props) => {
    const user = useSelector(state => state.user)
    const [title,setTitle] = useState("")
    const [abstract,setAbstract] = useState("")
    const [message,setMessage] = useState("")
    const [date,setDate] = useState("")
    const [pdfFile,setPdfFile] = useState(null)

    const handleUpload = async () => {
        // Simple POST request with a JSON body using fetch
        try {
            let formData = new FormData()
            formData.append('title',title)
            formData.append('abstract',abstract)
            formData.append('uploadMessage',message)
            formData.append('pdf',pdfFile)
            formData.append('publishedDate',new Date(date).to)
            formData.append('uploader',user._id)
            formData.append('authors',[user._id])
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }
            const requestOptions = {
                method: 'POST',
                body: formData
            };
            fetch('/papers', requestOptions)
                .then(response => console.log("Yay"))
        } catch (err) {
            console.error(err)
        }

    }

        return (
            <div className="container-sm">
                    <div className="mb-3 form-field">
                        <TextField label="Title" className="form-control" type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3 form-field">
                        <TextField label="Abstract" multiline rowsMax={4} className="form-control" value={abstract} name="abstract" onChange={(e)=>setAbstract(e.target.value)}></TextField>
                    </div>
                    <div className="mb-3 form-field">
                        <TextField label="Message to followers" className="form-control" type="text" value={message} name="message" onChange={(e)=>setMessage(e.target.value)}/>
                    </div>
                    <div className="mb-3 form-field row">
                        <div className="col">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                            <KeyboardTimePicker margin="normal"
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                                label="Date published"
                                                className="form-control"
                                                type="date"
                                                value={date}
                                                name="date"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                onChange={(e)=>setDate(e.target.value)}/>
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="col">
                            <label htmlFor="pdfFile" className="form-label">PDF of paper:</label>

                                <input  className="form-control" type="file" name="pdfFile"
                                       onChange={(e) => setPdfFile(e.target.files[0])}/>
                        </div>
                    </div>
                    <div className="mb-3 form-field">

                    </div>
                    <div className="mb-3 form-field">
                        <Button variant="contained" className="btn btn-primary" type="submit" onClick={handleUpload}>Upload Paper</Button>
                    </div>
            </div>
        )
}

export default PaperUploadForm;