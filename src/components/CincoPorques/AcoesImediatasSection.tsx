import React, { FC } from 'react';
import { CincoPorquesInfo } from '../../types';
import { Container, TextField } from '@material-ui/core';
import stylesCincoPorques from '../../styles/cincoPorques';

interface PropsEquipamentoSection {
    dados: CincoPorquesInfo;
    setDados: React.Dispatch<React.SetStateAction<CincoPorquesInfo>>;
}

type AllProps = PropsEquipamentoSection;

const AcoesImediatasSection: FC<AllProps> = (props: AllProps) => {
    const classes = stylesCincoPorques();

    const handleAnomalyChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setDados({ ...props.dados, descriptionAnomaly: event.currentTarget.value });
    };

    const handleCorrectiveChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setDados({ ...props.dados, corrective: event.currentTarget.value });
    };

    const handleMaintenanceOrderChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setDados({ ...props.dados, maintenanceOrder: event.currentTarget.value });
    };

    return (
        <Container className={classes.container}>
            <TextField
                value={props.dados.descriptionAnomaly}
                className={classes.item}
                variant="outlined"
                placeholder="Conte sobre o problema encontrado"
                helperText="Descrição da anomalia"
                multiline
                rows={5}
                onChange={handleAnomalyChange}
            />
            <TextField
                value={props.dados.corrective}
                className={classes.item}
                variant="outlined"
                placeholder="Conte como resolveu o problema"
                helperText="Medida Corretiva"
                multiline
                rows={5}
                onChange={handleCorrectiveChange}
            />
            <TextField
                value={props.dados.maintenanceOrder}
                className={classes.item}
                variant="outlined"
                placeholder="Qual a ordem de manutenção?"
                helperText="Ordem de manutenção"
                multiline
                rows={5}
                onChange={handleMaintenanceOrderChange}
            />
        </Container>
    );
};

export default AcoesImediatasSection;
