import React from 'react';
import { useHistory } from "react-router-dom";
import { postData } from "../helper/PostData";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { Formik } from "formik";

const stylesFunc = makeStyles((theme) => ({
    wrapper: {
      marginTop: "3rem",
      height: "calc(100vh - 19.0625rem)",
      textAlign: "center",
      marginBottom:"9rem",
    },
    avatar: {
      margin: "1rem auto",
      backgroundColor: theme.palette.primary.main,
    },
    signIn: {
      margin: "1rem",
    }, 
    register: {
      textDecoration: 'none',
      fontWeight: '600',
      paddingLeft : '0.5rem'
    }
    
  }));

const initialValues = {
    title: "",
    content: "",
    image: "",
  };

export default function PostCreate() {
    const history = useHistory();
    const signinStyles = stylesFunc();
    
    const handleFormSubmit = (values) => {
        console.log({values});
        postData("https://django-react-blog-prj.herokuapp.com/api/create/", values).then(() => {
            history.push("/");
          })
      };

  return (
    <Container className={signinStyles.wrapper} maxWidth="sm">
    <Avatar className={signinStyles.avatar}>
      <PostAddIcon />
    </Avatar>
    <Typography className={signinStyles.signIn} variant="h4">
      POST
    </Typography>
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, handleChange, values}) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Content"
            name="content"
            value={values.content}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Image Url"
            name="image"
            value={values.image}
            onChange={handleChange}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            SUBMIT
          </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  </Container>
          

  );
}