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
        let res = await axios.post("http://localhost:3001/api/users/signin", credentials)
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
                        <div className="card-body p-5">
                            <h1 className="fs-4 card-title fw-bold mb-4">Registrarse</h1>
                            <form className="needs-validation" onSubmit={handleSubmit} noValidate={true} autoComplete="off">
                                <div className="mb-3">
                                    <label className="mb-2 text-muted" htmlFor="userName">Usuario</label>
                                    <input id="userName" type="text" onChange={handleInputChange} className="form-control" name="userName" required autoFocus />
                                    <div className="invalid-feedback">
                                        Usuario inválido
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2 text-muted" htmlFor="email">Email</label>
                                    <input id="email" type="text" onChange={handleInputChange} className="form-control" name="email" required autoFocus />
                                    <div className="invalid-feedback">
                                        Email inválido
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="mb-2 w-100">
                                        <label className="text-muted" htmlFor="password">Contraseña</label>
                                        <a href="/" className="float-end">
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>
                                    <input  onChange={handleInputChange} id="password" type="password" className="form-control" name="password" required />
                                    <div className="invalid-feedback">
                                        Contraseña es requirida
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="form-check">
                                        <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                                        <label htmlFor="remember" className="form-check-label">Recordarme</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary ms-auto">
                                        <i className="bi bi-box-arrow-in-right"></i> Registrarse
                                    </button>
                                </div>
                                </form>
                        </div>
                        <div className="card-footer py-3 border-0">
                            <div className="text-center">
                                Todos los derechos reservados &copy; 2021
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export { SignInScreen }