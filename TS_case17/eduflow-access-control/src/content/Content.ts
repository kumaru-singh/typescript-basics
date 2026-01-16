export abstract class Content {
    public readonly title: string;
    public readonly author: string;
    private published: boolean = false;
  
    constructor(title: string, author: string) {
      this.title = title;
      this.author = author;
    }
  
    public publish() {
      this.published = true;
    }
  
    protected isPublished(): boolean {
      return this.published;
    }
  
    abstract getType(): string;
  }
  