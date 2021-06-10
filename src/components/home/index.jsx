import React from 'react'
import './style.scss'
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import Search from "../shared/search";
export default function Index() {
    return (
        <header className="masthead text-white text-center">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto"><h1 className="mb-5">Get started by searching a paper!</h1></div>
                    <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <form>
                            <div className="form-row">
                                <Search />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}