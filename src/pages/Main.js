import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { fetchData } from "../helper/FetchData";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, CircularProgress } from "@material-ui/core";
import { formatDateFunc } from "../helper/FormatDate";
import PostCard from "../components/PostCard";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "10rem",
    minHeight: "calc(100vh - 19.0625rem)",
    textAlign: "center",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
}));
function Main() {
//   const { id } = useParams();
  const mainStyles = stylesFunc();

  const [postData, setPostData] = useState();

  // TODO: fill in catch finally
  const fetchData = async () => {
    const data = await axios.get("https://django-react-blog-prj.herokuapp.com/api/list")
      .then((res) => setPostData(res?.data.results))
    };
    console.log(postData)

    useEffect(() => {
        fetchData();
        }, []);

    // useEffect(() => {
    //     fetchData("https://django-react-blog-prj.herokuapp.com/api/list").then((res) => {
    //     setPostData(res.data?.results);
    //     });
    // }, []);
    // console.log(postData)

  return (
    <Container className={mainStyles.wrapper}>
      {!postData ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={1}>
          {postData?.map((post, key) => {
            
            return (
              <Grid item sm={4} xs={6} key={key}>
                {/* {post.title} */}
                <PostCard
                  id={post.id}
                  title={post.title}
                  content={post.text}
                  imgSrc={post.image}
                  publishedDate={formatDateFunc(post.published_date)}
                  author={post.author}
                  commentCount={post.get_comment_count}
                  viewCount={post.get_view_count}
                  likeCount={post.get_like_count}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
}

export default Main;
            // "title": "learn django",
            // "content": "learn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn djangolearn django",
            // "image": "",
            // "status": "p",
            // "published_date": "2021-01-26T22:11:07.539180Z",
            // "author": "felix",
            // "slug": "learn-django-5eace78de0",
            // "get_comment_count": 0,
            // "get_view_count": 0,
            // "get_like_count": 0