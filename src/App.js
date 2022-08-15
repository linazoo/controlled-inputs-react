import * as React from "react";
import "./styles.css";
import {
  Button,
  Stack,
  TextField,
  Typography,
  List,
  ListItemText,
  ListItemButton
} from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function App() {
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState([]);

  const handleClick = () => {
    setList([...list, value]);
    setValue("");
  };

  const removeItem = (item) => {
    const newList = list.filter((element) => element !== item);
    setList(newList);
  };

  return (
    <div className="App">
      <Stack sx={{ maxWidth: "500px", gap: "24px" }}>
        <Typography variant="h2">My List</Typography>
        <TextField
          id="standard-basic"
          label="new list item"
          variant="standard"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="contained" onClick={handleClick}>
          Add
        </Button>

        <List>
          {list.map((item) => (
            <ListItemButton onClick={() => removeItem(item)}>
              <RemoveCircleIcon />
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Stack>
    </div>
  );
}

// https://hackernoon.com/top-3-coding-challenges-for-mid-level-react-developers
