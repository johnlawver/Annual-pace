const getTotalMiles = (runs) => {
  let total = 0;
  runs.map((run) => (total += run.miles));
  return total;
};

export default getTotalMiles;
