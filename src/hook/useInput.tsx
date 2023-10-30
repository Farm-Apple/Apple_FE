import { Dispatch, useCallback, useState } from 'react';

type Handler = (e: any) => void;
type ReturnTypes<T = any> = [T, Dispatch<React.SetStateAction<T>>, Handler];

const useInput = <T=any>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, setValue, handler];
};

export default useInput;
