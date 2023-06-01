import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function EmptySearchResultCard() {
  return (
    <Card sx={{ maxWidth: 390, mb: 5 }} elevation={3}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="left">
          No Search Results Found!!
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="teal">
            Please retype your search key
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
