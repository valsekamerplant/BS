export interface Action {
    name: string;
    type?: string;
  }
  
  export interface Room {
    name: string;
    location: [number, number];
    actions: Action[];
  }