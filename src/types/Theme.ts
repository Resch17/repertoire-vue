import { Color } from './Color';

export interface Theme {
    id: number;
    name: string;
    backgroundColorId: number;
    secondaryBackgroundColorId: number;
    accentTextColorId: number;
    primaryTextColorId: number;
    backgroundColor: Color;
    secondaryBackgroundColor: Color;
    accentTextColor: Color;
    primaryTextColor: Color;
}
