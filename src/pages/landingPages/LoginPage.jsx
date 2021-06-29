import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import '../../css/Login.css'
import imagen2 from '../../img/girl-ubication.svg'


function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/admin/rastreoBuses")
        }
    }, [])

    const handleSubmit = async () => {
        console.warn(email, password)
        history.push("/admin/rastreoBuses")
        // let items = { email, password };
        // let result = await fetch("http://3.208.58.70/usuario", (
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": 'application/json'
        //     },
        //     body: JSON.stringify(items)
        // ));
        // result = await result.json();
        // localStorage.setItem("user-info", JSON.stringfy(result))
        // history.push("/admin/rastreoBuses")
    }

    return (
    <div className="container1">
        <div className="forms-container">
            <div className="signin-signup">
                <form onSubmit={handleSubmit} className="sign-in-form formulario">
                    <h2 className="title">
                        Bienvenido a Brevi
                    </h2>
                    <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Ingrese su correo electrónico" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="Ingrese su contraseña" />
                    </div>
                    <input type="submit" name="" id="" value="Login" className="btn1 solid" />
                    
                </form>
            </div>
        </div>
        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <p>Para comenzar debe iniciar sesión con sus credenciales o contáctenos para habilitar una cuenta a su empresa.</p>
                    <p><b>(054) 426610 | brevi@gmail.com</b></p>
                </div>
                <img src={imagen2} className="image" alt="" />
            </div>
        </div>
    </div>
)
}

export default LoginPage