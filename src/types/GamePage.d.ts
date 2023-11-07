export type GamePage = {
    toggleScheme: (value: string) => void;
    msg: (msg: string, type: string, tag: string, noBullet: boolean) => { span: HTMLElement };
}