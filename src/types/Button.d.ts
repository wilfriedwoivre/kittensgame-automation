export type Button = {
    metadata: {
        name: string;
    };
    controller: {
        buyItem: (model: Model, event: any, callback: any) => void;
    };
    model: Model;
}

export type Model = {
    name: string;
}
