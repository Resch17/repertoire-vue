import { Instrument } from './Instrument';
import { Tone } from './Tone';

export interface Tuning {
    id: number;
    name: string;
    instrumentId: number;
    instrument: Instrument;
    string1ToneId: number;
    string2ToneId: number;
    string3ToneId: number;
    string4ToneId: number;
    string5ToneId?: number;
    string6ToneId?: number;
    string1Tone: Tone;
    string2Tone: Tone;
    string3Tone: Tone;
    string4Tone: Tone;
    string5Tone?: Tone;
    string6Tone?: Tone;
}
