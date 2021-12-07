import { makeStyles } from "@material-ui/core";
import { typography } from './typography';

const { colors, fontWeight } = typography

const useStyles = makeStyles({
  hocGrid: {
    direction: 'row',
    background: colors.green,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textShadow: "2px 2px 4px rgb(0 0 0 / 29%)",
    fontWeight: fontWeight.bold,
  },
});

export default useStyles