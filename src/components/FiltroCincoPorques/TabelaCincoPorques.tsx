/* eslint-disable react/display-name */
import React, { FC, useState, useContext } from 'react';
import { CincoPorquesInfo } from '../../types';
import MaterialTable, { Column } from 'material-table';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ViewListIcon from '@material-ui/icons/ViewList';
import tableIcons from '../ui/tableIcons';
import DialogFiltroCincoPorques from './DialogFiltroCincoPorques';
import { Container } from '@material-ui/core';
import { isNullOrUndefined } from 'util';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import stylesFiltroCincoPorques from '../../styles/filtroCincoPorques';

interface PropsTabela5w {
    cincoPorquesInfo: CincoPorquesInfo[];
    reloadTable: () => void;
}

interface StateTabela {
    columns: Array<Column<CincoPorquesInfo>>;
    rows: CincoPorquesInfo[];
}

type AllProps = PropsTabela5w;
const TabelaCincoPorques: FC<AllProps> = (props: AllProps) => {
    const classes = stylesFiltroCincoPorques();
    const [selected5w, setSelected5w] = useState<CincoPorquesInfo | undefined>(undefined);
    const [alertOn, setAlertStatus] = useState(false);
    const [deleteError, setDeleteError] = useState(false);

    const [tableState] = useState<StateTabela>({
        columns: [
            { title: 'ID Operador', field: 'userId' },
            { title: 'Equipamento', field: 'equip' },
            { title: 'Data', field: 'date' },
            { title: 'Causa', field: 'cause' },
            { title: 'Deterioração', field: 'deterioration' },
            { title: 'Turno', field: 'shift' },
        ],
        rows: props.cincoPorquesInfo,
    });

    const onDialogClose = () => {
        setSelected5w(undefined);
    };

    return (
        <Container>
            <MaterialTable
                title="5 W"
                columns={tableState.columns}
                data={tableState.rows}
                icons={tableIcons}
                actions={[
                    (rowData) => ({
                        icon: () => <VisibilityIcon />,
                        tooltip: 'Abrir 5W',
                        onClick: () => {
                            setSelected5w(rowData);
                        },
                    }),
                    (rowData) => ({
                        icon: () => <DeleteOutline />,
                        tooltip: 'Deletar',
                        onClick: () => {
                            axios
                                .delete(`/why/delete/${rowData._id}`)
                                .then(() => {
                                    setDeleteError(false);
                                    setAlertStatus(true);
                                    props.reloadTable();
                                })
                                .catch(() => {
                                    setDeleteError(true);
                                    setAlertStatus(true);
                                });
                        },
                    }),
                ]}
            />
            <Alert
                onClose={() => {
                    setAlertStatus(false);
                }}
                className={alertOn ? undefined : classes.hide}
                variant="filled"
                severity={deleteError ? 'error' : 'success'}
            >
                {deleteError ? 'Algo deu errado, pode tentar novamente?' : 'Deletado com sucesso!'}
            </Alert>

            {!isNullOrUndefined(selected5w) && (
                <DialogFiltroCincoPorques onClose={onDialogClose} cincoPorquesInfo={selected5w} />
            )}
        </Container>
    );
};

export default TabelaCincoPorques;
