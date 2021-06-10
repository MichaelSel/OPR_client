import React, {Component} from 'react';
import axios from "axios"
class Register extends Component {
    state = {
        firstname:"",
        lastname:"",
        affiliation:"",
        email:"",
        password1:"",
        password2:""
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    doRegister = () => {


        axios({
            method:"post",
            data: {
                firstname:this.state.firstname,
                lastname:this.state.lastname,
                affiliation:this.state.affiliation,
                email:this.state.email,
                password:this.state.password1,
                password2:this.state.password2,
            },
            withCredentials:true,
            url:"http://localhost:3001/register"
        }).then((res)=>{
            console.log(res)
        })
    }

    render () {
        return (
            <div className="container-md">
                    <div className="mb-3 form-field">
                        <label htmlFor="firstname">First Name</label><input type="text" name="firstname" className="form-control" aria-describedby="nameHelp" onChange={this.handleInputChange} value={this.state.firstname}/>
                        <label htmlFor="lastname">Last Name</label><input type="text" name="lastname"  className="form-control" aria-describedby="nameHelp" onChange={this.handleInputChange} value={this.state.lastname}/>
                        <div id="nameHelp" className="form-text">
                        </div>
                    </div>
                    <div className="mb-3 form-field">
                        <label htmlFor="affiliation">Affiliation</label><input type="text" name="affiliation" className="form-control" aria-describedby="affHelp" onChange={this.handleInputChange} value={this.state.affiliation}/>
                        <div id="affHelp" className="form-text">
                        </div>
                    </div>
                    <div className="mb-3 form-field">
                        <label htmlFor="email">Email Address</label><input type="text" name="email" className="form-control" aria-describedby="emailHelp" onChange={this.handleInputChange} value={this.state.email}/>
                        <div id="emailHelp" className="form-text">
                        </div>
                    </div>
                    <div className="mb-3 form-field">
                        <label htmlFor="password1">Password</label><input type="password" name="password1" className="form-control" aria-describedby="passwordHelp" onChange={this.handleInputChange} value={this.state.password1}/>
                        <label htmlFor="password2">Retype Password</label><input type="password" name="password2" className="form-control" aria-describedby="passwordHelp" onChange={this.handleInputChange} value={this.state.password2}/>
                        <div id="passwordHelp" className="form-text">
                        </div>
                    </div>
                    <div className="form-field">
                        <button className="btn btn-primary" onClick={this.doRegister}>Register</button>
                    </div>
            </div>



        )
    }
}

export default Register;