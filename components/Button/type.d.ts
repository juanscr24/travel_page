export interface IButton {
    type: 'button' | 'submit'
    title: string
    icon?: string
    variant: string
    full?: boolean;
}