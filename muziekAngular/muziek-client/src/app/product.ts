
export class Product {
  sBorder: Array<String>;
  constructor(public name: string, public demonym: string, public currency: string, public talen: number,
    public borders: string) { }

  SplitBorder(): void{
    this.sBorder = this.borders.split(";");

  }
  toForm(): string {
    this.SplitBorder()
    return `name=${this.name}&demonym=${this.demonym}&currency=${this.currency}&talen${this.talen}&borders=${this.sBorder}`;
   }
}
