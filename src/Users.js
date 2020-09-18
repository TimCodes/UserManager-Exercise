import * as React from "react";
import Grid from "@material-ui/core/Grid";

class Users extends Component {
  state = {};

  componentDidMount() {}
  render() {
    return (
      <>
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
        <div style={{ height: "400px", marginTop: "75px" }}>Users Table</div>
      </>
    );
  }
}
