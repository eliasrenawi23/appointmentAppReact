import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Container,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { LoginForm } from "./style";
import { login } from "../../../store/authSlice";
import { userValidationSchema } from "../../Validation/validation";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setLoading(true);
      dispatch(login(values));
      setLoading(false);
      setSubmitting(false);
      navigate("/analytics"); // Redirect to Analytics page
    },
  });

  return (
    <LoginForm onSubmit={formik.handleSubmit}>
      <Container>
        <Typography variant="h4">Login</Typography>
        <TextField
          id="username"
          name="username"
          label="Username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          fullWidth
          margin="normal"
        />
        <TextField
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading || formik.isSubmitting}
          fullWidth
        >
          {loading ? <CircularProgress size={24} /> : "Login"}
        </Button>
      </Container>
    </LoginForm>
  );
};

export default LoginPage;
