class Vocabulary {
    private _words:string[] = [];
    protected _language:string;

    constructor() {
        this._language = "English"    
    }

    public addWord(word:string): void {
        if(word.length !== 0 && !this._words.includes(word)) {
            this._words.push(word);
        }
    }

    public displayAll() {
        console.log(this._language);
        console.log(this._words.join(", "));
    }
}
export default Vocabulary;
