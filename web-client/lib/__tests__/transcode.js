import { encodeReference, decodeReference } from '../transcode';

describe('Transcode', () => {
  it('encodes and decode a test reference', () => {
    const testRef = '82yr192m10-m';
    const resultId = 'i1y2912umry98j101u';
    const label = 'Pomle Persson';

    const ref = encodeReference(testRef, resultId, label);
    expect(ref).toEqual(
      'eyJ0ZXN0SWQiOiI4MnlyMTkybTEwLW0iLCJyZXN1bHRJZCI6ImkxeTI5MTJ1bXJ5OThqMTAxdSIsImxhYmVsIjoiUG9tbGUgUGVyc3NvbiJ9'
    );

    expect(decodeReference(ref)).toEqual({
      label: 'Pomle Persson',
      resultId: 'i1y2912umry98j101u',
      testId: '82yr192m10-m'
    });
  });
});
