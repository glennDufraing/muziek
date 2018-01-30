export class Product {

   constructor (public name: string, public description: string, public price: number) {}

   toForm(): string {
      return `name=${this.name}&description=${this.description}&price=${this.price}`;
   }
}
