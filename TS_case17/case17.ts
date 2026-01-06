class Content {

    public readonly title : string;
    public readonly author : string;

    constructor(
         title: string,
         author: string
    ) {
        this.title = title;
        this.author = author;
    }

    public getContent() : string{
        return `This book title is ${this.title} and the author is ${this.author}`;
    }
}

class Assignment extends Content {
    private duedate : Date;

    protected setDueDate( duedate : Date){
        this.duedate = duedate;
    }

    }