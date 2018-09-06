export class DemoSummary {

  public id: string;

  public name: string;

  public toUrl: string;

  constructor(json?: any) {
    
    if (!json) {
      return;
    }

    this.id = json.id;
    this.name = json.name;
    this.toUrl = json.toUrl;
  }
}