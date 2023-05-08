import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";



function SignInScreen() {
    const [credentials, setCredentials] = useState({})

    const navigate = useNavigate()

    const handleInputChange = (e)=> {
        let { name, value } = e.target;

        let newData = {...credentials, [name]: value}
        setCredentials(newData)
    }

    const handleSubmit = async(e)=> {
        e.preventDefault();
        let res = await axios.post("https://conexa-challenge-back-w8as.vercel.app/api/users/signin", credentials)
        if(res.data.token){
            navigate("/home", {state: {token: res.data.token}})
        }
        else{
            alert("Informacion Incorrecta")
        }
    }

    return(
        <section className="h-100">
        <div className="container h-100">
            <div className="row justify-content-sm-center h-100">
                <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div className="card shadow-lg">
                        <div className="card-body form-body">
                            <h1 className="fs-4 card-title fw-bold mb-4">Registrarse</h1>
                            <form className="needs-validation" onSubmit={handleSubmit} noValidate={true} autoComplete="off">
                                <div className="mb-3">
                                    <label className="mb-2 text-muted" htmlFor="email">Usuario</label>
                                    <input id="email" type="text" onChange={handleInputChange} className="form-control" name="userName" required autoFocus />
                                    <div className="invalid-feedback">
                                        Usuario inválido
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2 text-muted" htmlFor="email">Email</label>
                                    <input id="email" type="email" onChange={handleInputChange} className="form-control" name="email" required autoFocus />
                                    <div className="invalid-feedback">
                                        Email inválido
                                    </div>
                                    </div>
                                <div className="mb-3">
                                    <label className="mb-2 text-muted" htmlFor="email">Contraseña</label>
                                    <input  onChange={handleInputChange} id="password" type="password" className="form-control" name="password" required />
                                    <div className="invalid-feedback">
                                        Contraseña es requirida
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="login-register">
                                    <button type="submit" className="btn btn-primary ms-auto login-register-button">
                                        <i className="bi bi-box-arrow-in-right"></i> Ingresar
                                    </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="mb-2 w-100 d-flex align-items-center form-register-container" >
                            <span>Ya tienes cuenta?</span>
                            <Link to ="/" className="form-register">
                            Registrarse
                            </Link>
                        </div>
                        <div className="card-footer py-3 border-0">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export { SignInScreen }