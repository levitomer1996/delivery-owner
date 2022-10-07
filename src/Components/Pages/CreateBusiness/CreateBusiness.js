import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import deliver from "../../../api/deliver";
import getToken from "../../../Helpers/getToken";
import PageContext from "../../../Context/PageContext";

const theme = createTheme();

export default function CreateBusiness() {
  const { setPage } = useContext(PageContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const token = getToken();
      const res = await deliver.post(
        "business/createbusiness",
        {
          name: data.get("name"),
          business_type: data.get("type"),
          coordinate: { x: 100, y: 100 },
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPage("Dashboard");
    } catch (error) {}
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
              id="Business name"
              label="Business name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="type"
              label="type"
              type="text"
              id="type"
              autoComplete="type"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create your Business
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
