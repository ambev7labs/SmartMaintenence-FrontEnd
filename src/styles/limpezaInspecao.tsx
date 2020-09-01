import { makeStyles } from '@material-ui/core/styles';

const stylesLimpezaInspecao = makeStyles((theme) => ({
    selector: {
        width: '100%',
        padding: theme.spacing(1.5),
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    selectorContainer: {
        marginBottom: theme.spacing(4),
    },
    hide: {
        display: 'none',
    },
    stepperRoot: {
        width: '100%',
    },
    stepperNextButton: {
        marginLeft: 'auto',
    },
    stepperButtonDiv: {
        display: 'flex',
    },
    procedureAttribute: {
        fontSize: 13,
    },
    procedureDivider: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    checkbox: {
        marginLeft: 'auto',
    },
    markedAccordion: {
        backgroundColor: '#d4f1f9',
    },
    listItem: {
        padding: theme.spacing(1.5),
    },
    uncheckedListItem: {
        backgroundColor: '#f2b195',
    },
    reportComments: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    accordion: {
        marginBottom: theme.spacing(1),
    },
    procedimentoButton: {
        marginLeft: 'auto',
        marginBottom: '3%',
    },
}));

export default stylesLimpezaInspecao;
