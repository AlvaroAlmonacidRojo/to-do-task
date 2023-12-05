import { Grid, Typography } from "@mui/material";
import TaskManager from "../components/TaskManager";

const IndexPage = () => {
  return (
    <Grid item style={{ textAlign: "center", marginTop: "100px" }}>
      <Typography variant="h4" gutterBottom>
        TO DO List
      </Typography>
      <Typography variant="body1" gutterBottom>
        With this functionality you can add, edit, mark as done and remove tasks
      </Typography>
      <TaskManager />
    </Grid>
  );
};

export default IndexPage;
