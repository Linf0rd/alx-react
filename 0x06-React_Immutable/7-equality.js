import { is, Map } from 'immutable';

export function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
