import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useGetBusinesses from "../../hooks/useGetBusinesses";
import Checkbox from "@mui/material/Checkbox";
import { CheckBox } from "@mui/icons-material";

const theme = createTheme();
const AddHorizotal = () => {
  const [businesses, getBusinesses] = useGetBusinesses();
  const [businessesToAdd, setBusinessesToAdd] = useState([]);
  useEffect(() => {
    getBusinesses();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const creds = {
      email: data.get("email"),
      password: data.get("password"),
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
          </Box>
        </Box>
      </Container>
      <Box sx={{ width: "80%", bgcolor: "background.paper" }}>
        <List>
          {businesses.map(({ name, _id }) => {
            return (
              <ListItem disablePadding key={_id}>
                <Checkbox
                  color="secondary"
                  onChange={(e) => {
                    let isChecked = e.currentTarget.checked;
                    let newList = businessesToAdd;
                    if (isChecked) {
                      newList.push(_id);
                    } else {
                      const index = newList.indexOf(_id);
                      if (index > -1) {
                        // only splice array when item is found
                        newList.splice(index, 1); // 2nd parameter means remove one item only
                      }
                    }
                    setBusinessesToAdd(newList);
                    console.log(businessesToAdd);
                  }}
                />

                <ListItemText primary={name} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </ThemeProvider>
  );
};

export default AddHorizotal;
