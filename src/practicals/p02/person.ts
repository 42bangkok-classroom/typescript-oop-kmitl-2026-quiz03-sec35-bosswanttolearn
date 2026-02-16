export class Person {
    
    firstname: string = ''
    lastname: string = ''

    private age: number = 0
    static country: string = 'Thailand '

    set(age : number): void {
        this.age = age
    }
    get age(): number {
        return this.age
    }
    getFullName(): string {
        return `${this.firstname} ${this.lastname}`
    }
}