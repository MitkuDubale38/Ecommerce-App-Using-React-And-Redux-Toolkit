import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RatingIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";

export default function ProductCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={props.image} title={props.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="left">
          {props.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "yellow",
          }}
        >
          <Typography variant="body2" color="teal">
            {props.category}
          </Typography>
          <Box sx={{ display: "inline-flex" }}>
            <Typography variant="body2" color="text.secondary" align="right">
              {props.rating.rate}
            </Typography>
            <RatingIcon />
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" align="left">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            align="left"
            fontWeight="bold"
            fontSize="18px"
          >
            {props.price}
          </Typography>
          <Button
            size="small"
            sx={{
              color: "teal",
            }}
          >
            Add To Cart
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
