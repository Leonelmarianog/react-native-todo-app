import { useCallback, useState } from 'react';

import type { Dispatch, SetStateAction } from 'react';

export function useToggle(
  initialValue?: boolean,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(!!initialValue);

  const toggle = useCallback(() => {
    setValue((currentValue) => !currentValue);
  }, []);

  return [value, toggle, setValue];
}
