import * as React from "react";
import { AccountCircle, Visibility } from "@mui/icons-material";
import { useAuth } from "../../hooks/auth";
import {
  Button,
  Typography,
  TextField,
  CircularProgress,
  Grid,
  Card,
  InputAdornment,
  Box,
} from "@mui/material";
import { useState } from "react";
import usePost from "../../hooks/usePost";

const LoginForm = () => {
  const { setToken } = useAuth();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { postData, loading, error } = usePost<{ token: string }>();

  const handleLogin = async () => {
    try {
      await postData({
        url: "/api/login",
        body: { username, password },
      }).then((res) => setToken(res.data.token));
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Grid item textAlign="center" xl={6} mt="100px">
      <Card>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Typography variant="body1" gutterBottom>
          Use a fake username and password to login
        </Typography>
        {loading && <CircularProgress size={24} color="primary" />}
        <Box>
          <TextField
            label="Username"
            margin="normal"
            value={username}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            label="Password"
            type="password"
            margin="normal"
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Visibility />
                  </InputAdornment>
                ),
              }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          disabled={loading}
        >
          Login
        </Button>
      </Card>
    </Grid>
  );
};

export default LoginForm;
