import React from 'react'
import './login.css'
import companyLogo from '../../assets/images/logo-2.png';


const Forgotpassword = () => {

    function doSomething(){
        window.location.assign("/login")
        } 

    return (
        <div className='container-flui'>
            <div className="row">
                <div className="col-sm"> 
                <img src={companyLogo} alt="MiiCare logo" className='logo' height={40} width={135} />

                </div>
                <div className="col-sm">
                </div>
                <div className="col-sm">



                    <div className="login-page">

                        <div className="form">
                            <h4>FORGOT PASSWORD</h4><br />
                            <p class="text-align">Please enter your email address and we'll send you temporary password for first login. You will be forced to change this at next login.</p>
                    <br />
                            <form className="login-form" >
                                <input type="text" placeholder="Email" />
                           <button className='recover' onClick="doSomething()">  Recover  </button>
                               
                            </form>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default Forgotpassword
