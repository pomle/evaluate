export function encodeReference(testId, resultId, label) {
  const data = { testId, resultId, label };
  const blob = JSON.stringify(data);
  const ref = btoa(blob);
  return ref;
}

export function decodeReference(ref) {
  const blob = atob(ref);
  const data = JSON.parse(blob);
  return data;
}
