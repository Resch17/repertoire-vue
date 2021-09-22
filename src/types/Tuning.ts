import { Instrument } from './Instrument';
import { Tone } from './Tone';

export interface Tuning {
    Id: number;
    Name: string;
    InstrumentId: number;
    Instrument: Instrument;
    String1ToneId: number;
    String2ToneId: number;
    String3ToneId: number;
    String4ToneId: number;
    String5ToneId?: number;
    String6ToneId?: number;
    String1Tone: Tone;
    String2Tone: Tone;
    String3Tone: Tone;
    String4Tone: Tone;
    String5Tone?: Tone;
    String6Tone?: Tone;
}
