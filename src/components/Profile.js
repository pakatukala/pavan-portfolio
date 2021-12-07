import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Hamburger from "hamburger-react";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import Avatar from "react-avatar";

const icon = (
  <Grid container style={{ display: "flex", justifyContent: "center" }}>
    <Paper
      style={{
        display: "flex",
        height: "100vh",
        width: "18vw",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        style={{
          alignItems: "center",
          boxShadow: "0px 1px 0px 0px rgba(0, 0, 0, 0.12)",
          height: "7vh",
          width: "16vw",
        }}
      >
        <Avatar name="Pavan Katukala" size="50" round={true} />
        <Grid item style={{ padding: '3%', fontWeight: 500}}><p>Pavan Katukala</p></Grid>
      </Grid>
    </Paper>
  </Grid>
);

const Profile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Grid
      container
      style={{
        background: "#06a763",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Grid container style={{ zIndex: "1000" }}>
        <Collapse orientation="horizontal" in={isOpen}>
          {icon}
        </Collapse>
        <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} />
      </Grid>
    </Grid>
  );
};

export default Profile;
