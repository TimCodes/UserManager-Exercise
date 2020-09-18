import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import UsersTable from "./UsersTable";

const TestUsers = [
  {
    id: "55faef3e3166640003000000",
    created_at: "2015-09-17T16:50:06.000Z",
    updated_at: "2020-09-16T20:21:29.564Z",
    email: "aaron@trychameleon.com",
    name: "Aaron Cody",
    cached_avatar:
      "https://d1ts43dypk8bqh.cloudfront.net/v1/avatars/eb38d065-c587-402f-aa17-135c754db73a",
    agent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
    style: "owner",
    stats: { invited_users_count: 3, published_campaigns_count: null },
  },
  {
    id: "5cca2620ea9d910004bb873f",
    created_at: "2019-05-01T23:05:04.000Z",
    updated_at: "2020-09-16T20:01:46.475Z",
    email: "andrew@trychameleon.com",
    name: "Andrew Hendricks",
    cached_avatar:
      "https://lh3.googleusercontent.com/-Av9tgNfU2eE/AAAAAAAAAAI/AAAAAAAAAAk/CUY-pphPtNE/s50/photo.jpg",
    agent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
    style: "member",
    stats: { invited_users_count: 0, published_campaigns_count: null },
  },
  {
    id: "5845b6555a8bda000452275e",
    created_at: "2016-12-05T18:47:49.000Z",
    updated_at: "2020-09-15T16:40:11.557Z",
    email: "ben@trychameleon.com",
    name: "ben robbins",
    cached_avatar:
      "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
    agent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
    style: "owner",
    stats: { invited_users_count: 1, published_campaigns_count: 5 },
  },
];

class Users extends React.Component {
  state = {};

  componentDidMount() {}
  render() {
    return (
      <>
        <Typography
          component="h1"
          variant="h1"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Users
        </Typography>
        <Grid container spacing={3} style={{ marginTop: "50px" }}>
          <Grid item xs={12} sm={3}>
            Total Users
          </Grid>
          <Grid item xs={12} sm={3}>
            Total Campaigns
          </Grid>
          <Grid item xs={12} sm={3}>
            Total Team Members
          </Grid>
          <Grid item xs={12} sm={3}>
            Last Created at
          </Grid>
        </Grid>
        <div style={{ height: "400px", marginTop: "75px" }}>
          <UsersTable users={TestUsers} />
        </div>
      </>
    );
  }
}

export default Users;
