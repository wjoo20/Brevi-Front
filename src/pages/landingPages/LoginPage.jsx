import '../../css/Login.css'
import imagen2 from '../../img/girl-ubication.svg'

export default function LoginPage() {
    return (
            <div className="container1">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="" className="sign-in-form formulario">
                            <h2 className="title">
                                Bienvenido a Brevi
                        </h2>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="text" placeholder="Ingrese su correo electrónico" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Ingrese su contraseña" />
                            </div>
                            <input type="submit" name="" id="" value="Login" className="btn1 solid" />
                            <p className="social-text">
                                O inicie sesión directamente desde Google
                        </p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                            </div>
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
