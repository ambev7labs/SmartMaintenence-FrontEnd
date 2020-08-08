import React, { FC } from 'react';
import { CincoPorquesInfo } from '../../types';
import { Container, TextField } from '@material-ui/core';
import stylesCincoPorques from '../../styles/cincoPorques';

interface PropsCincoPorquesSection {
    dados: CincoPorquesInfo;
    setDados: React.Dispatch<React.SetStateAction<CincoPorquesInfo>>;
}

type AllProps = PropsCincoPorquesSection;

const CincoPorquesSection: FC<AllProps> = (props: AllProps) => {
    const classes = stylesCincoPorques();

    const handleFirstWhy = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.dados.whys[0] = { description: event.currentTarget.value, number: '0' };
        props.setDados({ ...props.dados, whys: [...props.dados.whys] });
    };

    const handleSecondWhy = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.dados.whys[1] = { description: event.currentTarget.value, number: '1' };
        props.setDados({ ...props.dados, whys: [...props.dados.whys] });
    };

    const handleThirdWhy = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.dados.whys[2] = { description: event.currentTarget.value, number: '2' };
        props.setDados({ ...props.dados, whys: [...props.dados.whys] });
    };

    const handleFourthWhy = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.dados.whys[3] = { description: event.currentTarget.value, number: '3' };
        props.setDados({ ...props.dados, whys: [...props.dados.whys] });
    };

    const handleFifthWhy = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.dados.whys[4] = { description: event.currentTarget.value, number: '4' };
        props.setDados({ ...props.dados, whys: [...props.dados.whys] });
    };

    return (
        <Container className={classes.container}>
            <TextField
                value={props.dados.whys[0]?.description || ''}
                className={classes.item}
                variant="outlined"
                placeholder="Por que?"
                helperText="1º Porquê"
                multiline
                rows={5}
                onChange={handleFirstWhy}
            />
            <TextField
                value={props.dados.whys[1]?.description || ''}
                className={classes.item}
                variant="outlined"
                placeholder="Por que?"
                helperText="2º Porquê"
                multiline
                rows={5}
                onChange={handleSecondWhy}
            />
            <TextField
                value={props.dados.whys[2]?.description || ''}
                className={classes.item}
                variant="outlined"
                placeholder="Por que?"
                helperText="3º Porquê"
                multiline
                rows={5}
                onChange={handleThirdWhy}
            />
            <TextField
                value={props.dados.whys[3]?.description || ''}
                className={classes.item}
                variant="outlined"
                placeholder="Por que?"
                helperText="4º Porquê"
                multiline
                rows={5}
                onChange={handleFourthWhy}
            />
            <TextField
                value={props.dados.whys[4]?.description || ''}
                className={classes.item}
                variant="outlined"
                placeholder="Por que?"
                helperText="5º Porquê"
                multiline
                rows={5}
                onChange={handleFifthWhy}
            />
        </Container>
    );
};

export default CincoPorquesSection;
