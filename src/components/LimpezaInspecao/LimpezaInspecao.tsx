import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { GrupoEquipamento, Equipamento } from '../../types';
import stylesLimpezaInspecao from '../../styles/limpezaInspecao';
import GrupoEquipamentoSelector from './GrupoEquipamentoSelector';
import EquipamentoSelector from './EquipamentoSelector';
import StepperLimpezaInspecao from './StepperLimpezaInspecao';
import clsx from 'clsx';

const LimpezaInspecao = () => {
    const classes = stylesLimpezaInspecao();

    // State relacionado ao GrupoEquipamentoSelector
    const [grupos, setGrupos] = useState<GrupoEquipamento[] | undefined>(undefined);
    const [selectedGrupo, setSelectedGrupo] = useState<string>('');

    // State relacionado ao EquipamentoSelector
    const [equipamentosDoGrupo, setEquipamentosDoGrupo] = useState<Equipamento[] | undefined>([]);
    const [selectedEquipamentoId, setSelectedEquipamentoId] = useState<string>('');
    const [selectedEquipamento, setSelectedEquipamento] = useState<Equipamento | undefined>({} as Equipamento);

    const sendReportToServer = () => {
        // send post to server
    };

    return (
        <Container className={classes.container}>
            <Container className={classes.selectorContainer}>
                <GrupoEquipamentoSelector
                    grupos={grupos}
                    setGrupos={setGrupos}
                    selectedGrupo={selectedGrupo}
                    setSelectedGrupo={setSelectedGrupo}
                    setSelectedEquipamentoId={setSelectedEquipamentoId}
                />
                <EquipamentoSelector
                    equipamentosDoGrupo={equipamentosDoGrupo}
                    grupo={selectedGrupo}
                    setEquipamentosDoGrupo={setEquipamentosDoGrupo}
                    selectedEquipamentoId={selectedEquipamentoId}
                    setSelectedEquipamentoId={setSelectedEquipamentoId}
                    setSelectedEquipamento={setSelectedEquipamento}
                />
            </Container>
            <StepperLimpezaInspecao
                className={clsx(classes.selector, selectedEquipamentoId === '' && classes.hide)}
                selectedEquipamento={selectedEquipamento}
                setSelectedEquipamento={setSelectedEquipamento}
                sendReportToServer={sendReportToServer}
            />
        </Container>
    );
};

export default LimpezaInspecao;
