import React, { FC } from 'react';
import { CincoPorquesInfo } from '../../types';
import { Container, TextField, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import stylesCincoPorques from '../../styles/cincoPorques';

interface PropsConclusoesSection {
    dados: CincoPorquesInfo;
    setDados: React.Dispatch<React.SetStateAction<CincoPorquesInfo>>;
}

type AllProps = PropsConclusoesSection;

const ConclusoesSection: FC<AllProps> = (props: AllProps) => {
    const classes = stylesCincoPorques();

    const handleDeteriorationChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setDados({ ...props.dados, deterioration: event.currentTarget.value });
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setDados({ ...props.dados, comment: event.currentTarget.value });
    };

    const handleMaintenanceNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setDados({ ...props.dados, maintenanceNotes: event.currentTarget.value });
    };

    const handleCauseChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.setDados({ ...props.dados, cause: event.currentTarget.value });
    };

    return (
        <Container className={classes.container}>
            <FormControl className={classes.item} component="fieldset">
                <FormLabel component="legend">Tipo de Deterioração:</FormLabel>
                <RadioGroup value={props.dados.deterioration} onChange={handleDeteriorationChange}>
                    <FormControlLabel value="Natural" control={<Radio />} label="Natural" />
                    <FormControlLabel value="Forçada" control={<Radio />} label="Forçada" />
                </RadioGroup>
            </FormControl>

            <FormControl className={classes.item} component="fieldset">
                <FormLabel component="legend">Tipo de Defeito:</FormLabel>
                <RadioGroup value={props.dados.cause} onChange={handleCauseChange}>
                    <FormControlLabel value="Máquina" control={<Radio />} label="Máquina" />
                    <FormControlLabel value="Material" control={<Radio />} label="Material" />
                    <FormControlLabel value="Medição" control={<Radio />} label="Medição" />
                    <FormControlLabel value="Método" control={<Radio />} label="Método" />
                    <FormControlLabel value="Meio Ambiente" control={<Radio />} label="Meio Ambiente" />
                    <FormControlLabel value="Mão de Obra" control={<Radio />} label="Mão de Obra" />
                </RadioGroup>
            </FormControl>

            <TextField
                value={props.dados.comment || ''}
                className={classes.item}
                variant="outlined"
                placeholder="Possíveis ações preventivas"
                helperText="Comentários e ações preventivas"
                multiline
                rows={5}
                onChange={handleCommentChange}
            />
        </Container>
    );
};

export default ConclusoesSection;
