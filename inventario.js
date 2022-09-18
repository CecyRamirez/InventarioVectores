class Inventario{
    constructor(){
        this.productos=[];
    }

    agregar(producto){
        this.productos.push(producto);
    }
    eliminar(codigo){
        for (let i=0;i< this.productos.length; i++){
            if(this.productos[i].codigo == codigo){
                let aux =this.productos[i];
                for(let j=i;j<this.productos.length;j++){
                    this.productos[j]= this.productos[j+1];
                }
                this.productos[this.productos.length-1]=aux;
                this.productos.pop();
            }
        }
        return null;
    }
    listado(){
        let aux="";
        for (let i=0;i< this.productos.length; i++){
            aux+= this.productos[i].infoHtml();
        }
        return aux;
    }
    listadoInverso(){
        let aux="";
        for (let i=this.productos.length-1;i>=0; i--){
            aux+= this.productos[i].infoHtml();
        }
        return aux;
    }
    buscar(codigo){
        for (let i=0;i< this.productos.length; i++){
            if(this.productos[i].codigo == codigo){
                return this.productos[i];
            }
        }
        return null;
    }
}