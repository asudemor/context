import { useContext } from "react";
import authContext from "./context/auth-context";


function Auth() {
    const{status,login} = useContext (authContext);
    return ( <div>
        <h1>Giriş yaptın mı?</h1>
        {status ? <p>Evet</p> : <p>Hayır</p>}
        {status ? <button onClick={login}>Çıkış Yap</button> : <button onClick={login}>Giriş Yap</button>}
    
    </div> );
}

export default Auth;