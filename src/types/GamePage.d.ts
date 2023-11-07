export type GamePage = {
    msg: (msg: string, type: string, tag: string, noBullet: boolean) => { span: HTMLElement };
}