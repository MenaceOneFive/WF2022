import {useNavigate} from "react-router-dom";
import {getFBAuth, isSignedIn, signOut} from "../../FirebaseWrapper/FBAuth";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {GoogleSignInButton} from "../../FirebaseWrapper/GoogleSignInButton";

// 로그인을 위한 컴포넌트
export const SignInPage = () => {
    const [error, setError] = useState("");
    const auth = getFBAuth();
    const navigate = useNavigate();

    // 폼 입력 데이터를 기반으로 로그인 처리
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        try {
            let data = await signInWithEmailAndPassword(
                auth,
                formData.get("email"),
                formData.get("password")
            );
            console.log(data);
            navigate("/");
        } catch (error) { // 파이어베이스 auth에서 제공하는 로그인 오류 처리
            console.log({error});
            switch (error.code) {
                case "auth/invalid-email":
                    setError("유효하지 않은 이메일 주소입니다.");
                    break;
                case "auth/wrong-password":
                    setError("비밀번호가 일치하지 않습니다.");
                    break;
                case "auth/user-not-found":
                    setError("사용자를 찾을 수 없습니다.");
                    break;
                default:
                    setError("Login Error");
                    break;
            }
        }
    };

    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="/">
                    호연지기
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const theme = createTheme();

    //로그인 화면 렌더링
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{mt: 1}}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="이메일 주소"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="비밀번호"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="로그인 상태 유지"
                        />
                        <Typography sx={{textAlign: "center", fontSize: "15px", color: "red"}} component="h1"
                                    variant="h6">
                            {error}
                        </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            로그인
                        </Button>

                        <Grid container>
                            <Grid item xs></Grid>
                            <Grid item>
                                <Link href="/signUp" variant="body2">
                                    {"회원가입"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <GoogleSignInButton/>
                </Box>
                <Copyright sx={{mt: 5}}/>
            </Container>
        </ThemeProvider>
    );
};

export const ToSignInPageButton = () => {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => {
                navigate("/SignIn");
            }}
        >
            로그인
        </button>
    );
};

export const SignOutButton = () => {
    return (
        <button className="sing-in-button"
            onClick={() => {
                signOut();
                window.location.reload();
            }}
        >
            로그아웃
        </button>
    );
};

export const DrawSignButton = () => {
    return isSignedIn() ? <SignOutButton/> : <ToSignInPageButton/>;
};