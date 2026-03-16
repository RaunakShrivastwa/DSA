export default class GraphImple{

    private size:number;
    private matrix:number[][];

    constructor(size:number){
        this.size = size;
        this.matrix = new Array(size);
        for(let i =0;i<size;i++){
            for(let j=0;j<size;j++){
                this.matrix[i][j] = 0;
            }
        }

        console.log(this.matrix);
        

        


    }

}