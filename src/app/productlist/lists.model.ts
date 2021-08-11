export class Lists {
    public name: string;
    public price: number;
    public description: string;
    public imgPath: string;


    constructor(name: string, desc: string, price: number, imgPath: string){
        this.name = name;
        this.description = desc;
        this.price = price;
        this.imgPath = imgPath;

    }
}