import { Map } from 'immutable';

export function mergeDeeplyElements(page1, page2) {
  const immutablePage1 = Map(page1);
  const immutablePage2 = Map(page2);
  
  const mergedMap = immutablePage1.mergeDeep(immutablePage2);
  
  return mergedMap.toList();
}
