import React from "react";
import { useHistory } from "react-router-dom";
import { postData } from "../helper/PostData";
import {
  Button,
  TextField,
  Grid,
  Container,
  Avatar,
  Typography,
  Link,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const signUpValidationSchema = Yup.object().shape({
  username: Yup.string().required("Display Name is required!!"),
  email: Yup.string().email("Invalid Email").required("Email is required!!"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
  password2: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "3rem",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
    marginBottom: "12rem",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
  signUp: {
    margin: "1rem",
  },
  login: {
    textDecoration: 'none',
    fontWeight: '600',
    paddingLeft : '0.5rem'
  }  
}));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Signup() {
  const history = useHistory();
  const signupStyles = stylesFunc();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
    
      postData("https://django-react-blog-prj.herokuapp.com/api/user/register/", values)
        .then((data, err) => {
            toast("Successfully registered");
            history.push("/");
        })
        .catch((err) => {
            toast(err?.message || "An error occured");
        });
    },
    
  });

//   const handleGoogleButtonClick = () => {
//     firebase.useGoogleProvider();
//   };

  return (
    <Container className={signupStyles.wrapper} maxWidth="sm">
      <Avatar className={signupStyles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={signupStyles.signUp} variant="h4">
        Sign Up
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="username"
              label="User Name"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("username")}
              error={formik.touched.username && formik.errors.username}
              helperText={
                formik.touched.username && formik.errors.username
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("email")}
              error={formik.touched.email && formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              {...formik.getFieldProps("password")}
              error={formik.touched.password && formik.errors.password}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password2"
              label="Password Again"
              variant="outlined"
              type="password"
              fullWidth
              {...formik.getFieldProps("password2")}
              error={formik.touched.password2 && formik.errors.password2}
              helperText={formik.touched.password2 && formik.errors.password2}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <p>
        Already have an account? <Link className={signupStyles.login}  href="/login"> Login.</Link>
      </p>
      <Box mt={5}>
              <Copyright />
        </Box>
    </Container>
  );
}

export default Signup;
