export class Animal {
  constructor(id?: number, nome?: string) {
    this.id = id;
    this.nome = nome;
  }
  public id: number | undefined;
  public nome: string | undefined;
}
