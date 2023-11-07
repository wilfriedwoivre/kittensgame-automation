import { Button } from './Button';
import { ResPool } from './Resource';

export type GamePage = {
    colorScheme: string;
    toggleScheme: (value: string) => void;
    msg: (msg: string, type: string, tag: string, noBullet: boolean) => { span: HTMLElement };

    resPool: ResPool;
    bldTab: {
        children: Button[];
    }
}