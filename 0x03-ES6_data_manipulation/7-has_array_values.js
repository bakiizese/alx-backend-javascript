export default function hasValuesFromArray(sst, arr) {
  return arr.map((vl) => sst.has(vl))
    .every(Boolean);
}
