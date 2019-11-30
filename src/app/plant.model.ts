export class Plant {
    temperature: Number = 0;
    humidity: Number = 0;
    water: Number = 0;
    data: any[] = [];

    constructor(temp: any, humid: any, water: any, data: any[]) {
        this.temperature = temp;
        this.humidity = humid;
        this.water = water;
        this.data = data;
    }
}