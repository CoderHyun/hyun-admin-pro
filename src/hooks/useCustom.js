import { ref } from 'vue';
import { getPrototype } from '@/utils/shard-type';

/**
 * 传入一个默认值，返回响应式对象和set function
 * @param initialValue
 * @returns {(*|setValue)[]}
 */
export function useCustom(initialValue = null) {
  const value = ref(initialValue);

  function setValue(newValue) {
    const valueType = getPrototype(initialValue);
    if (valueType === 'number') {
      value.value = Number(newValue);
    } else if (valueType === 'boolean') {
      value.value = !!newValue;
    } else {
      value.value = newValue;
    }
  }

  return [value, setValue];
}
