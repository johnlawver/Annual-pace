const dayOfYear = () => {
  const date = new Date();

  return Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
};

export default dayOfYear;
