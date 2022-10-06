import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import deliver from "../../../api/deliver";
import getToken from "../../../Helpers/getToken";
import AuthContext from "../../../Context/AutContext";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const theme = createTheme();

export default function AddProduct() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [type, setType] = useState("");
  const { authState } = useContext(AuthContext);

  const menuItemList = ["STARTER", "MAIN", "DESSERT", "DRINK"];
  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const token = getToken();
      const res = await deliver.post(
        "/product/new",
        {
          name: data.get("name"),
          price: data.get("price"),
          image: data.get("image"),
          type,
          business_id: authState.user.Business[0]._id,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
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
              label="Product name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              name="price"
              label="Price"
              type="number"
              id="price"
              autoComplete="price"
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="type"
                onChange={handleChange}
              >
                {menuItemList.map((item) => {
                  return (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              InputLabelProps={{ shrink: true }}
              label="Choose image from file"
              type="text"
              id="image"
              // onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
