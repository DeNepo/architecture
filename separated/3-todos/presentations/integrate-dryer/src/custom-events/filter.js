export const filterEvent = (done = true, notDone = true) => {
  return new CustomEvent('filter', {
    bubbles: true,
    detail: { done, notDone },
  });
};
