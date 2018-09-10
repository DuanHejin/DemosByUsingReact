export class NavModel {

  public id: string;

  public name: string;

  public desc: string[];

  public to: string;

  constructor(json?: any) {
    
    if (!json) {
      return;
    }

    this.id = json.id;
    this.name = json.name;
    this.desc = json.desc;
    this.to = json.to;
  }
}