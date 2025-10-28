export class Post {
    id: number;
    title: string;
    body: string;
    votes: number;

    constructor(id: number, title: string, body: string, votes: number) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.votes = votes;
    }
}