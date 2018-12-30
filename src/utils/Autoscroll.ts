class Vector2d {
  offsetX: number;
  offsetY: number;

  constructor(offsetX = 0, offsetY = 0) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }

  sum(other: Vector2d) {
    return new Vector2d(
      this.offsetX + other.offsetX,
      this.offsetY + other.offsetY
    );
  }
}

/**
 * Scrolls to a specific element on the page
 * @param elem (Required) The element to go to
 * @param velocity (Optional) The speed of the scrolling (Default = 100)
 * @param startFromTop (Optional) If set to true, it will first reset the position to the top and then scroll to the specified element. If set to false, the animation will start from the current scrolled place. (Default = false)
 */
export function scrollTo(
  elem: HTMLElement,
  velocity = 100,
  startFromTop = false
) {
  const elemDistance = new Vector2d(elem.offsetLeft, elem.offsetTop);
  const currStartDistance = startFromTop
    ? new Vector2d(0, 0)
    : new Vector2d(window.pageXOffset, window.pageYOffset);

  const distance = elemDistance.offsetY - currStartDistance.offsetY > 0;
}

function animation(velocity: number, distance: number, startingTime: Date = new Date(Date.now())) {
  if (Math.abs(distance) < 1) return; // TODO: stopmechanism needs improvemnts

  // execute update
  const minDistance = animationUpdate(velocity, (distance < 0)? true : false, startingTime);

  // prepare new update
  const nextStartTime = new Date(Date.now())
  window.requestAnimationFrame(() => {
    animation(velocity, Math.abs(distance) - Math.abs(minDistance), nextStartTime)
  })
}

function animationUpdate(
  velocity: number,
  up: boolean,
  prevTime: Date
): number {
  // make preparations
  const directionInt = (up) ? 1 : -1;
  const now = new Date(Date.now())
  const distanceY = directionInt * velocity * (now.getTime() - prevTime.getTime());
  // animation
  window.scroll(0, distanceY);

  return distanceY;
}
