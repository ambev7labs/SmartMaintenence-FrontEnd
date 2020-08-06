export interface GrupoEquipamento {
    id: number;
    title: string;
}

export interface Equipamento {
    date: Date;
    _id: string;
    name: string;
    procedures: Procedimento[];
    field: string;
    typeEquip: string;
    __v: number;
    frequency: number;
    period: string;
}

export interface Procedimento {
    _id: string;
    item: string;
    description: string;
    method: string;
    location: string;
    point: number;
    condition: 'PARADA' | 'RODANDO';
    checked: boolean;
}
