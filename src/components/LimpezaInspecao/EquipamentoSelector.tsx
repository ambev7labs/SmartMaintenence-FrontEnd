import React, { FC, useEffect } from 'react';
import { Select, FormControl, MenuItem, FormHelperText } from '@material-ui/core';
import axios from 'axios';
import stylesLimpezaInspecao from '../../styles/limpezaInspecao';
import { Equipamento } from '../../types';

interface PropsEquipamentoSelector {
    grupo: string;
    equipamentosDoGrupo: Equipamento[] | undefined;
    setEquipamentosDoGrupo: React.Dispatch<React.SetStateAction<Equipamento[] | undefined>>;
    selectedEquipamentoId: string;
    setSelectedEquipamentoId: React.Dispatch<React.SetStateAction<string>>;
    setSelectedEquipamento: React.Dispatch<React.SetStateAction<Equipamento | undefined>>;
}
type AllProps = PropsEquipamentoSelector;

const EquipamentoSelector: FC<AllProps> = (props: AllProps) => {
    const classes = stylesLimpezaInspecao();

    useEffect(() => {
        axios
            .get(`/equip/indexbyequip?field=Packaging%20501&group=${props.grupo}`)
            .then((response) => {
                response.data.map((equipamento: Equipamento) => {
                    equipamento.procedures.map((procedure) => (procedure.checked = false));
                });
                props.setEquipamentosDoGrupo(response.data);
            })
            .catch((e) => {
                console.error('Não foi possível listar os equipamentos', e);
            });
    }, [props.grupo]);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.setSelectedEquipamentoId(event.target.value as string);
        props.setSelectedEquipamento(
            props.equipamentosDoGrupo?.filter((equi) => equi._id === (event.target.value as string))[0]
        );
    };

    return (
        <FormControl className={classes.selector} variant="outlined">
            <Select value={props.selectedEquipamentoId} onChange={handleChange} displayEmpty>
                <MenuItem value="" disabled>
                    Nenhum
                </MenuItem>
                {props.equipamentosDoGrupo?.map((equipamento, index) => (
                    <MenuItem key={'equipamento-limp-insp-' + index} value={equipamento._id}>
                        {equipamento.name + ' (' + equipamento.period + ' ' + equipamento.frequency + 'x)'}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>Selecione um Equipamento</FormHelperText>
        </FormControl>
    );
};

export default EquipamentoSelector;
