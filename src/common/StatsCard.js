import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const StatCard = ({ title, value }) => (
  <Card>
    <CardContent>
      <Typography style={{ fontSize: 25 }}>{title}</Typography>
      <Divider />
      <Typography color="primary" style={{ fontSize: 40 }}>
        {value}
      </Typography>
    </CardContent>
  </Card>
);

export default StatCard;
