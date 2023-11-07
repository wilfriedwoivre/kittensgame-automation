export type Button = {
    controller: {
        buyItem: (model: Model, event: any, callback: any) => void;
    };
    model: Model;
}

export type Model = {
    name: string;
    metadata: {
        name: string;
    };
}
