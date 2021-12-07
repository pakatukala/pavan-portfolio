import Loader from "react-loader-spinner";
import Grid from "@material-ui/core/Grid";
import useStyles from "../styles.js/loader.style";

const NAME = 'Pavan Katukala'


function AppLoader() {
  const styles = useStyles();
  return (
    <Grid container className={styles.hocGrid} spacing={0}>
      <Grid style={{ color: "#fff", textAlign: 'center' }}>
        <h2>{NAME}</h2>
        <Loader type="Grid" color="#fff" height={80} width={80} />
      </Grid>
    </Grid>
  );
}

export default AppLoader;
