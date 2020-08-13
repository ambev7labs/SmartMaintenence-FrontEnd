import { makeStyles } from '@material-ui/core/styles';

const stylesTabelaChecks = makeStyles((theme) => ({
    hide: {
        display: 'none',
    },
    dialogField: {
        padding: theme.spacing(2),
        width: '40%',
        minWidth: '200px',
    },
    cancelButton: {
        marginRight: 'auto',
    },
    textFieldLista: {
        width: '95%',
        padding: theme.spacing(2),
        minWidth: '250px',
    },
    textFieldSecondary: {
        width: '20%',
        padding: theme.spacing(2),
        minWidth: '100px',
    },
    dialogContainer: {
        width: '100%',
        maxWidth: '100% !important',
    },
    listItem: {
        padding: theme.spacing(1.5),
        marginBottom: '30px',
        borderRadius: '16px',
        border: '1px solid #ccc!important',
        marginRight: '40px',
    },
    listItemColored: {
        backgroundColor: '#fbd7de',
    },
}));

export default stylesTabelaChecks;
