import "./SignInPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form } from "react-bootstrap";

import {useNavigate} from "react-router-dom";
import {getFBAuth, isSignedIn, signOut} from "../../Firebase/FBAuth";
import {GoogleSignInButton} from "../../Firebase/GoogleSignInButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const auth = getFBAuth()
    const navigate = useNavigate();

    const onChange = (event) => {
        const {target:{id, value}} = event;
        if (id === "sign-in-email-address") {
            setEmail(value);
        }
        else if (id === "sign-in-password") {
            setPassword(value);
        }
    }   

    const onSubmit = async(event) => {
        event.preventDefault();
        try {  
            let data = await signInWithEmailAndPassword(auth, email, password)
            console.log(data);
            navigate("/");
        } catch(error) {
            console.log({error});
            switch(error.code) {
                case "auth/invalid-email": setError("유효하지 않은 이메일 주소입니다."); break;
                case "auth/wrong-password": setError("비밀번호가 일치하지 않습니다."); break;
                case "auth/user-not-found": setError("사용자를 찾을 수 없습니다."); break;
                default : setError("Login Error"); break;
            }
        }
    }
    return (
        <Container id="main-container" className="d-grid h-100 container">
            <Form onSubmit={onSubmit} id="sign-in-form" className="text-center w-100">
                <img
                    className="mb-4 logo"
                    src="img/temp-logo.png"
                    alt="temp logo" />
                    <h1 className="mb-3 fs-3 fw-normal">로그인</h1>
                    <Form.Group controlId="sign-in-email-address">
                        <Form.Control type="email" size="lg" placeholder="이메일 주소" autoComplete="username" className="position-relative" 
                        onChange={onChange}/>
                    </Form.Group>
                    <Form.Group controlId="sign-in-password" className="mb-3">
                        <Form.Control type="password" size="lg" placeholder="비밀번호" autoComplete="current-password" className="position-relative" 
                        onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center mb-2">
                        <Form.Check label="로그인 상태 유지" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Text id="login-error-text">{error}</Form.Text>
                    </Form.Group>
                    <div id="button-div" className="d-grid">
                        <Button type="submit" variant="primary" size="lg" className="w-100 mt-3 mb-3">로그인</Button>
                        <GoogleSignInButton/>
                    </div>
            </Form> 
        </Container>
    )

}

export const ToSignInPageButton = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => {
            navigate("/SignIn")
        }}>
            로그인
        </button>
    )
}

export const SignOutButton = () => {
    return (
        <button onClick={() => {
            signOut()
            window.location.reload()
        }}>로그아웃</button>
    )
}

export const DrawSignButton = () => {
    return isSignedIn() ? <SignOutButton/> : <ToSignInPageButton/>
}