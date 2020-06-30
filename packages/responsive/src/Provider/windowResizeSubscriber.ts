type Callback = (width: number) => void;

let subscribers: Callback[] = [];

function getWindowWidth() {
  return window.innerWidth;
}

function subscribe(cb: Callback): () => void {
  subscribers.push(cb);

  cb(getWindowWidth());

  return () => unsubscribe(cb);
}

function unsubscribe(cb: Callback): void {
  subscribers = subscribers.filter((fn) => fn !== cb);
}

function handleResize(): void {
  const width = getWindowWidth();

  subscribers.forEach((cb) => cb(width));
}

window.addEventListener('resize', handleResize);

export default subscribe;
