import React ,{useState}  from "react";

const Form = (props) =>{
    const {f_name,l_name, email, password,confirm_password} = props
    const [userF_name,setF_name] = useState(f_name); // need to change to an empty string
    const [userL_name,setL_name] = useState(l_name);
    const [userEmail,setEmail] = useState(email);
    const [userPassword,setPassword] = useState(password);
    const [userConfirm_password,setConfirm_password] = useState(confirm_password);
    // const [image,setImage] = useState("");
    const createUser = (e) =>{
        e.preventDefault();
        const newUser = {
        userF_name,
        userL_name,
        userEmail,
        userPassword,
        userConfirm_password};
        console.log("new user",newUser);
    }
    // const showError =() =>{
    //     if(userF_name.length == null)
    //     {
    //         return null
    //     }
    //     else if(userF_name.length > 3){
    //         return (
    //                 <p>name must be at lest 3 character long</p>
    //                 )
    //     }
    //     else{
    //         return null
    //     }
    // }
    return(
    <div className="Form" >
        
        <h3>fill this form</h3>
        <form /*onSubmit={createUser}*/>
            <div>
                <label>first name</label>
                <input onChange={(e) => {setF_name(e.target.value)}} type="text" name="" id="" />
                {userF_name.length < 3?<p>first name must be longer than 3 characters </p>
                : null
                }
                
            </div>
            <div>
                <label>Last name</label>
                <input onChange={(e) => {setL_name(e.target.value)}} type="text" name="" id="" />
                {userL_name.length < 3?<p>last name must be longer than 3 characters</p>: null
                }
            </div>
            <div>
                <label>Email</label>
                <input onChange={(e)=> {setEmail(e.target.value)}} type="text" name="" id="" />
                {
                    userEmail.length < 5?<p>email must be a least 5 character long</p>: null
                }
            </div>
            <div>
                <label>Password</label>
                <input onChange={(e) =>{setPassword(e.target.value)} } type="password" name="" id="" />
                {userPassword.length < 8?<p>password must be longer than 8 characters</p>: null
                }
            </div>
            <div>
            <label>confirm Password</label>
                <input onChange={(e)=>{setConfirm_password(e.target.value)}} type="password" name="" id="" />
                {userConfirm_password !== userPassword?<p>password must match </p>: null
                }
            </div>
            {/* <div>
                <label htmlFor=""> image url</label>
                <input onChange={(e) => {setImage(e.target.value)}}  type="text" name="" id="" />
            </div> */}
            <div>
                <input type="submit" />
            </div>
        </form>

        <div>
        <p>your info:</p>
        <p>first name: {userF_name} </p>
        <p>last name: {userL_name} </p>
        <p>email: {userEmail}</p>
        <p>Password: {userPassword}</p>
        <p>confirm Password: {userConfirm_password}</p>
        {/* <img src={image} heigh= "200px" /> */}
        </div>
    </div>
    )

}

export default Form;