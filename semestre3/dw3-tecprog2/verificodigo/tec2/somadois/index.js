function somaDois(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i];
    if (map.has(complemento)) {
      console.log("[", map.get(complemento), ",", i, "]");
    }
    map.set(nums[i], i);
  }
  return [];
}

somaDois([2, 5, 6, 2, 1, 0, 5], 11);
