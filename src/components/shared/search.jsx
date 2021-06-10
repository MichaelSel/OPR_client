import fetch from "cross-fetch";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";


export default function Search() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    let timer

    const onChangeHandle = async q => {
        // this default api does not support searching but if you use google maps or some other use the value and post to get back you reslut and then set it using setOptions
        if(timer) clearTimeout(timer)



        //Use timer to avoid spamming the system for fast typing
        timer = setTimeout(async ()=>{
            const response = await fetch(
                "http://localhost:3001/search?q=" +encodeURIComponent(q)
            );
            const data = await response.json();
            setOptions(Object.keys(data).map(key => data[key]));
        },300)

    };

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);



    return (
        <Autocomplete
            id="asynchronous-demo"
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => option.label === value.label}
            getOptionLabel={option => option.label}
            options={options}
            loading={loading}
            renderInput={params => (
                <TextField
                    {...params}
                    label="Search paper"
                    variant="outlined"
                    onChange={ev => {
                        // dont fire API if the user delete or not entered anything
                        if (ev.target.value !== null) {
                            if(ev.target.value.length>2) onChangeHandle(ev.target.value);
                        }
                    }}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? (
                                    <CircularProgress color="inherit" size={20} />
                                ) : null}
                            </React.Fragment>
                        )
                    }}
                />
            )}
        />
    );
}