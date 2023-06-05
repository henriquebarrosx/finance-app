export class Session {
    public name: string

    constructor(
        readonly id: string,
        name: string,
        readonly email: string,
        readonly picture: string,
    ) {
        this.name = name
            .split(' ')
            .slice(0, 2)
            .join(' ')
    }
}