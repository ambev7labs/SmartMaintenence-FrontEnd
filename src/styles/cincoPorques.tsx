import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styleCincoPorques = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },
        hide: {
            display: 'none',
        },
        container: {
            padding: theme.spacing(1),
        },
        item: {
            padding: theme.spacing(1),
            width: '30%',
            minWidth: '250px',
        },
    })
);
export default styleCincoPorques;
