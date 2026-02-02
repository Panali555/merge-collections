
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];

  let i = 0;                          
  let j = 0;                         
  let k = collection_3.length - 1;    

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    const candidates: { value: number; from: 'c1' | 'c2' | 'c3' }[] = [];

    if (i < collection_1.length) {
      candidates.push({ value: collection_1[i], from: 'c1' });
    }
    if (j < collection_2.length) {
      candidates.push({ value: collection_2[j], from: 'c2' });
    }
    if (k >= 0) {
      candidates.push({ value: collection_3[k], from: 'c3' });
    }

    // หา minimum 
    let minIndex = 0;
    for (let idx = 1; idx < candidates.length; idx++) {
      if (candidates[idx].value < candidates[minIndex].value) {
        minIndex = idx;
      }
    }

    const chosen = candidates[minIndex];
    result.push(chosen.value);

    if (chosen.from === 'c1') i++;
    else if (chosen.from === 'c2') j++;
    else k--;
  }

  return result;
}
