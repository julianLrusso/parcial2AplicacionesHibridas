import FormLogin from "../../components/Auth/FormLogin";
import FormRegister from "../../components/Auth/FormRegister";

function Login({onLogin}) {

    return (
        <div className="container">
            <div className="card mt-4">
                <div className="card-body">
                    <FormLogin onLogin={onLogin}/>
                </div>
            </div>

            <div className="card mt-4">
                <div className="card-body">
                    <FormRegister onLogin={onLogin} />
                </div>
            </div>
    </div>
    )
}
export default Login;