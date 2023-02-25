import { MintesToHoursAndMinutesPipe } from './mintes-to-hours-and-minutes.pipe';

describe('MintesToHoursAndMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new MintesToHoursAndMinutesPipe();
    expect(pipe).toBeTruthy();
  });
});
