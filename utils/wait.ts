function wait({
  ms = 1000,
  signal,
}: { ms?: number; signal?: AbortSignal } = {}) {
  return new Promise((resolve, reject) => {
    const id = setTimeout(resolve, ms);

    if (signal) {
      signal.addEventListener('abort', () => {
        clearTimeout(id);
        reject(new Error('Aborted'));
      });
    }
  });
}

export { wait };
