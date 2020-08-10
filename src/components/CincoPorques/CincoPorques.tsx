import React, { useState, useContext, useEffect } from 'react';
import { CincoPorquesInfo } from '../../types';
import { Paper, Stepper, Step, StepLabel, StepContent, Button, Typography, Container } from '@material-ui/core';
import stylesCincoPorques from '../../styles/cincoPorques';
import Title from '../ui/Title';
import EquipamentoSection from './EquipamentoSection';
import AcoesImediatasSection from './AcoesImediatasSection';
import CincoPorquesSection from './CincoPorquesSection';
import ConclusoesSection from './ConclusoesSection';
import UserData from '../../contexts/UserData';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import { isNullOrUndefined } from 'util';

const getSteps = () => {
    return ['Equipamento', 'Ações Imediatas', '5 Porquês', 'Conclusões'];
};

const dadosIniciais: CincoPorquesInfo = {
    use: '',
    comment: '',
    corrective: '',
    date: new Date(),
    descriptionAnomaly: '',
    deterioration: 'Natural',
    equip: '',
    field: '',
    maintenanceNotes: '',
    maintenanceOrder: '',
    shift: 'A',
    tag: '',
    userId: '',
    whys: [],
    cause: 'Máquina',
};

const CincoPorques = () => {
    const classes = stylesCincoPorques();
    const [dados, setDados] = useState(dadosIniciais);
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const userData = useContext(UserData);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const [isRequestSent, setIsRequestSent] = useState(false);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSendRequest = () => {
        axios
            .post('/why/create/', dados)
            .then(() => {
                setErrorMessage(undefined);
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                setIsRequestSent(true);
            })
            .catch((e) => {
                console.error(e);
                setIsRequestSent(true);
                setErrorMessage(e.data.error.message);
            });
    };

    useEffect(() => {
        setDados({ ...dados, userId: userData.user.userId as string, field: userData.user.field as string });
    }, [userData]);

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Title>5 Porquês</Title>
            <Paper>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label) => (
                        <Step key={`5w-stepper-${label}`}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                {activeStep === 0 && <EquipamentoSection dados={dados} setDados={setDados} />}
                                {activeStep === 1 && <AcoesImediatasSection dados={dados} setDados={setDados} />}
                                {activeStep === 2 && <CincoPorquesSection dados={dados} setDados={setDados} />}
                                {activeStep === 3 && <ConclusoesSection dados={dados} setDados={setDados} />}
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Voltar
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={activeStep === steps.length - 1 ? handleSendRequest : handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Enviar' : 'Próximo'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>Finalizado</Typography>
                    </Paper>
                )}
            </Paper>
            <Alert
                className={isRequestSent ? undefined : classes.hide}
                variant="filled"
                severity={isNullOrUndefined(errorMessage) ? 'success' : 'error'}
            >
                {errorMessage || '5 Porquês criados com sucesso!'}
            </Alert>
        </Container>
    );
};

export default CincoPorques;
