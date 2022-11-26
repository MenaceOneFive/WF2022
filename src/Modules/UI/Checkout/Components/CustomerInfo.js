import {Box, TextField} from "@mui/material";

export const CustomerInfo = ({customer, setCustomer}) => {
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
                <TextField id="outlined-basic" label="이름" required type={"text"} onChange={(e) => {
                    setCustomer({name:e.target.value,email:customer.email,phone:customer.phone})
                } } value={customer.name}/>
                <TextField id="outlined-basic" label="이메일" required type={"text"} onChange={(e) => {
                    setCustomer({name:customer.name,email:e.target.target,phone:customer.phone})
                }}/>
            </div>
            <div>
                <TextField id="outlined-basic" label="연락처" required type={"tel"} onChange={
                    (e) => {
                        setCustomer({name:customer.name,email:customer.email,phone:e.target.value})
                    }
                }/>
            </div>
        </Box>
    )
}