export interface GestureEventType {
	nativeEvent: { translationY: number; translationX: number };
}

export interface Coordinate {
	x: number;
	y: number;
}

export enum Direction {
	Right,
	Up,
	Left,
	Down,
}
