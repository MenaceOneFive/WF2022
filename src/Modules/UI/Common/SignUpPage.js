import {useNavigate} from "react-router-dom";
import {addUserToDB, getFBAuth, isOverlapUsername} from "../../FirebaseWrapper/FBAuth";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useState} from "react";
import {updateProfile} from 'firebase/auth'


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';

export const SignUpPage = () => {
    const [error, setError] = useState("");
    const auth = getFBAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        if (await isOverlapUsername(formData.get("username")) == true) {
            setError("이미 사용하고 있는 사용자 별명입니다.");
            return;
        }

        if (formData.get("password") !== formData.get("password-confirm")) {
            setError("비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        try {
            createUserWithEmailAndPassword(
                auth,
                formData.get("email"),
                formData.get("password")
            ).then((data) => {
                updateProfile(auth.currentUser, {displayName: formData.get("username")}).then(() => {
                    addUserToDB(formData.get("username"), formData.get("email"), data.user.uid)
                    navigate("/");
                })
            })
        } catch (error) {
            console.log({error});
            switch (error.code) {
                case "auth/invalid-email":
                    setError("유효하지 않은 이메일 주소입니다.");
                    break;
                case "auth/weak-password":
                    setError("비밀번호는 최소 6자리를 넘어야 합니다.");
                    break;
                case "auth/email-already-in-use":
                    setError("이미 사용하고 있는 이메일 주소입니다.");
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

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        회원가입
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="사용자 별명"
                                    name="username"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="이메일 주소"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="비밀번호"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password-confirm"
                                    label="비밀번호 확인"
                                    type="password"
                                    id="password-confirm"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                    label="이벤트와 마케팅 프로모션에 대한 정보를 이메일로 받습니다."
                                />
                            </Grid>
                        </Grid>
                        <Typography sx={{textAlign: "center", fontSize: "15px", color: "red", mt: 1}} component="h1"
                                    variant="h6">
                            {error}
                        </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            회원가입
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Typography sx={{fontSize: '15px', color: 'grey'}}>이미 계정이 있으신가요?
                                    <Link sx={{ml: 1}} href="/signIn" variant="body2">
                                        로그인
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 5}}/>
            </Container>
        </ThemeProvider>
    );
}