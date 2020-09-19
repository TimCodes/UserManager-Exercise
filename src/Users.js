import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import UsersTable from "./UsersTable";
import StatCard from "./StatsCard";
import GetUsers from "./Api";
import { FormatUserData } from "./Utils";

class Users extends React.Component {
  state = {
    users: [],
    totalCampaigns: 0,
    totalUserInvites: 0,
    totalteamMembers: 0,
    lastCreatedAt: null,
  };

  componentDidMount() {
    GetUsers().then((rawUsers) => {
      let {
        users,
        totalCampaigns,
        totalUserInvites,
        totalteamMembers,
        lastCreatedAt,
      } = FormatUserData(rawUsers);
      this.setState({
        users,
        totalCampaigns,
        totalUserInvites,
        totalteamMembers,
        lastCreatedAt,
      });
    });
  }
  render() {
    const {
      users,
      totalCampaigns,
      totalUserInvites,
      totalteamMembers,
      lastCreatedAt,
    } = this.state;
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
            <StatCard title="Total Invited Users" value={totalUserInvites} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <StatCard title="Total Campaigns" value={totalCampaigns} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <StatCard title="Total Team Members" value={totalteamMembers} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <StatCard title="Last User Added" value={lastCreatedAt} />
          </Grid>
        </Grid>
        <div style={{ height: "400px", marginTop: "75px" }}>
          <UsersTable users={users} key={users.id} />
        </div>
      </>
    );
  }
}

export default Users;
