import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  TextField,
  makeStyles,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    backgroundColor: "#F5F7FA",
    overflowY: "hidden"
  },
  title: {
    fontSize: 24
  }
});

const Join = () => {
  const classes = useStyles();

  const [name, setName] = useState("");

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h1" className={classes.title}>
              Join Realtime Chat
            </Typography>
            <Grid item xs={12}>
              <TextField
                label="Name"
                onChange={e => setName(e.target.value)}
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
            </Grid>
          </CardContent>
          <CardActions>
            <Link
              to={`./Chat?name=${name}`}
              onClick={e => (!name ? e.preventDefault() : null)}
            >
              <Button
                color="primary"
                variant="contained"
                type="submit"
                size="large"
              >
                Sign in
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Join;
