export interface Action {
    name: string;
    type?: string;
  }
  
  export interface Room {
    name: string;
    location: [number, number];
    actions: Action[];
  }

  export interface Marker {
    name: string,
    image: string,
    type: string,
    x: number,
    y: number
  }