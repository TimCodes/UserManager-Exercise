import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import "./StatsCard.css";

const StatCard = ({ title, value }) => (
  <Card className="stats-card">
    <CardContent>
      <Typography className="stats-card__title">{title}</Typography>
      <Divider />
      <Typography color="primary" className="stats-card__value">
        {value}
      </Typography>
    </CardContent>
  </Card>
);

export default StatCard;
