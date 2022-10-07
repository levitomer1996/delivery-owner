import React from "react";
import { CircularProgress, Typography } from "@mui/material";
export default (spinner, error) => {
  if (spinner) {
    return <CircularProgress />;
  } else if (error) {
    return (
      <Typography style={{ color: "red" }}>
        Email or password are wrong.
      </Typography>
    );
  } else {
    return null;
  }
};
