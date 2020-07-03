// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Callback = (param: any) => void;
type Subscribers = Callback[];
type Events = {
  [key: string]: Subscribers;
};

const events: Events = {};

function getWindowWidth(): number {
  return window.innerWidth;
}

function subscribe(eventName: string, cb: Callback): () => void {
  if (!events[eventName]) {
    events[eventName] = [];
    window.addEventListener(eventName, () => handleEvent(eventName));
  }

  events[eventName].push(cb);

  handleEvent(eventName);

  return () => unsubscribe(eventName, cb);
}

function unsubscribe(eventName: string, cb: Callback): void {
  events[eventName] = events[eventName].filter((fn) => fn !== cb);
}

function handleEvent(eventName: string): void {
  if (eventName === 'resize') {
    handleResize();
  }
}

function handleResize() {
  const param = getWindowWidth();

  events['resize'].forEach((cb) => cb(param));
}

export default subscribe;
