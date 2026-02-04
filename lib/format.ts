export const formatTime = (date: Date) => {
  const localDate = new Date(date);
  return localDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};
