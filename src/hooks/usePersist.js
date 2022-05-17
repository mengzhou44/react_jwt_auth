import useLocalStorage from './useLocalStorage';

const usePersist = (key, initValue) => {
  const [value, setValue] = useLocalStorage(key, initValue);
  const toggle = (value) => {
    setValue((prev) => {
      return typeof value === 'boolean' ? value : !prev;
    });
  };

  return [value, toggle];
};

export default usePersist;
