import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RatingIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { titleCase } from "../utils/utils";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 390, mb: 5 }} elevation={3}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="left">
          {product.title.length > 25
            ? `${product.title.substring(0, 25)}...`
            : product.title}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="teal">
            {titleCase(product.category)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary" align="right">
              {product.rating.rate}
            </Typography>
            <RatingIcon />
          </Box>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="left">
          {product.description.length > 100
            ? `${product.description.substring(0, 100)}...`
            : product.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body2"
            color="text.secondary"
            align="left"
            fontWeight="bold"
            fontSize="18px"
          >
            {product.price.toString() + " $"}
          </Typography>
          <Button variant="outlined" color="info" startIcon={<AddIcon />}>
            Add To Cart
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
