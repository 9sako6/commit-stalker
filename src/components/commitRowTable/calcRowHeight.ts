const dateHeight = 24;

export const calcRowHeight = (lineCounts: number, isIncludeDate: boolean) => {
  const marginSize = 24 * Math.min(lineCounts, 1);
  const othersSize = 70;
  const lineSize = 14;
  return marginSize + othersSize + (lineCounts - 1) * lineSize + (isIncludeDate ? dateHeight : 0);
};
