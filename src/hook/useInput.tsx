import { Dispatch, useCallback, useState } from 'react';

type Handler = (e: any) => void;
type ReturnTypes<T = string> = [T, Dispatch<React.SetStateAction<T>>, Handler];

const useInput = <T=string>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, setValue, handler];
};

export default useInput;
