import {Box, TextField} from "@mui/material";

export const CustomerInfo = () => {
    return (
        <Box
            className="customer-info"
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField id="outlined-basic" label="이름" required type={"text"}/>
                <TextField id="outlined-basic" label="이메일" required type={"text"}/>
            </div>
            <div>
                <TextField id="outlined-basic" label="연락처" required type={"tel"}/>
            </div>
        </Box>
    )
}