export type ResPool = {
    get: (name: string) => Resource;
}

export type Resource = {
    name: string;
    value: number;
    maxValue: number;
    visible: boolean;
}
