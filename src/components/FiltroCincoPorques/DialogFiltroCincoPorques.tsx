import React, { FC } from 'react';
import { CincoPorquesInfo } from '../../types';
import { Container, Dialog, DialogTitle, TextField, List, ListItemText } from '@material-ui/core';
import stylesFiltroLimpezaInspecao from '../../styles/filtroLimpezaInspecao';

interface PropsDialogFitroLimpezaInsp {
    cincoPorquesInfo: CincoPorquesInfo;
    onClose: () => void;
}
type AllProps = PropsDialogFitroLimpezaInsp;
const DialogFiltroLimpezaInspecao: FC<AllProps> = (props: AllProps) => {
    const classes = stylesFiltroLimpezaInspecao();

    return (
        <Dialog
            className={classes.dialogContainer}
            onClose={props.onClose}
            open={true}
            PaperProps={{ classes: { root: classes.paperDialog } }}
        >
            <DialogTitle>5 W</DialogTitle>
            <Container className={classes.listItem}>
                <TextField
                    className={classes.textFieldLista}
                    variant="outlined"
                    disabled
                    label="Nome do equipamento"
                    value={props.cincoPorquesInfo.equip || ' '}
                />
                <TextField
                    className={classes.textFieldLista}
                    variant="outlined"
                    disabled
                    type="date"
                    label="Data"
                    value={props.cincoPorquesInfo.date?.toString().split('T')[0] || ' '}
                />
                <TextField
                    className={classes.textFieldLista}
                    variant="outlined"
                    disabled
                    label="Área"
                    value={props.cincoPorquesInfo.field || ' '}
                />
                <TextField
                    className={classes.textFieldLista}
                    variant="outlined"
                    disabled
                    label="ID do Operador responsável"
                    value={props.cincoPorquesInfo.userId || ' '}
                />
                <TextField
                    className={classes.textFieldLista}
                    variant="outlined"
                    disabled
                    multiline
                    label="Turno"
                    value={props.cincoPorquesInfo.shift || ' '}
                />
                <TextField
                    className={classes.textFieldLista}
                    variant="outlined"
                    disabled
                    multiline
                    label="Ordem de manutenção"
                    value={props.cincoPorquesInfo.maintenanceOrder || ' '}
                />
                <TextField
                    className={classes.textFieldLista}
                    variant="outlined"
                    disabled
                    multiline
                    label="Tag"
                    value={props.cincoPorquesInfo.tag || ' '}
                />
                <TextField
                    className={classes.textFieldLista}
                    variant="outlined"
                    disabled
                    multiline
                    label="Descrição da anomalia"
                    value={props.cincoPorquesInfo.descriptionAnomaly || ' '}
                />
                <TextField
                    className={classes.textFieldLista}
                    variant="outlined"
                    disabled
                    label="Causa"
                    value={props.cincoPorquesInfo.cause || ' '}
                />
                <TextField
                    className={classes.textFieldLista}
                    variant="outlined"
                    disabled
                    multiline
                    label="Correção"
                    value={props.cincoPorquesInfo.corrective || ' '}
                />
                <TextField
                    className={classes.textFieldLista}
                    variant="outlined"
                    disabled
                    multiline
                    label="Tipo de deterioração"
                    value={props.cincoPorquesInfo.deterioration || ' '}
                />
                <TextField
                    className={classes.textFieldLista}
                    variant="outlined"
                    disabled
                    multiline
                    label="Notas de manutenção"
                    value={props.cincoPorquesInfo.maintenanceNotes || ' '}
                />
                <TextField
                    className={classes.textFieldLista}
                    variant="outlined"
                    disabled
                    multiline
                    label="Comentários e ações preventivas"
                    value={props.cincoPorquesInfo.comment || ' '}
                />
                <List>
                    {props.cincoPorquesInfo.whys.map((porque) => (
                        <ListItemText
                            key={`5w-fitro-whys-list-${porque.number}`}
                            primary={porque.description}
                            secondary={porque.number}
                        />
                    ))}
                </List>
            </Container>
        </Dialog>
    );
};

export default DialogFiltroLimpezaInspecao;
