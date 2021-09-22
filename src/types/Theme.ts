import { Color } from './Color';

export interface Theme {
    Id: number;
    Name: string;
    BackgroundColorId: number;
    SecondaryBackgroundColorId: number;
    AccentTextColorId: number;
    PrimaryTextColorId: number;
    BackgroundColor: Color;
    SecondaryBackgroundColor: Color;
    AccentTextColor: Color;
    PrimaryTextColor: Color;
}
