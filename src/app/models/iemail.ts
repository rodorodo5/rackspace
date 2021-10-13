export interface IEmail {
  id:number;
  name: string;
  types: Array<IType>;
  max: number;
  selected:boolean;
  current_price: number;
  current_quantity: number;
  current_type:number;
  error: boolean;
}

interface IType {
  id:number;
  name: string;
  description: string;
  price: number;
  quantity:number;
}
