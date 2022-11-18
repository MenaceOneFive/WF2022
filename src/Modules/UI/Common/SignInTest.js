import {useNavigate} from "react-router-dom";
import {getFBAuth, isSignedIn, signOut} from "../../Firebase/FBAuth";
import {GoogleSignInButton} from "../../Firebase/GoogleSignInButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


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
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ToSignInPageButton = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => {
            navigate("/SignUp")
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

const theme = createTheme();

export const SignInTest = () => {
    const [error, setError] = useState("");
    const auth = getFBAuth()
    const navigate = useNavigate();

    const goSignUp = navigate("/signup")

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {  
            let data = await signInWithEmailAndPassword(auth, formData.get("email"), formData.get("password"))
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
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Typography component="h1" variant="h5">
            {error}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="#" onclick="goSignUp" variant="body2">
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          
        <GoogleSignInButton/>
        </Box>
      </Container>
    </ThemeProvider>
  );
}