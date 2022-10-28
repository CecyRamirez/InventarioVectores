class Inventario{
    constructor(){
        this.productos=[];
    }

    agregar(producto){
        if(this.productos.length==0){
            this.productos.push(producto);
        }
        else{
            if(this.productos.length==0){
                this.productos.push(producto);
            }
            else{
                //buscar valor
                let left= 0;
                let right= this.productos.length-1;
                while(left <= right){
                    var mid_index =Math.floor((left + right)/2);
                    let middle_value = this.productos[mid_index].codigo;
                    if(codigo== middle_value){
                        return this.productos[mid_index];
                    }
                    if (codigo < middle_value){
                        right= mid_index -1;
                    }
                    else if (codigo > middle_value){
                        left= mid_index +1;
                    }
                }
                console.log('mid i ' + mid_index)
                console.log(this.productos[mid_index].codigo);
                console.log(producto.codigo)
                if(this.productos[mid_index].codigo > producto.codigo && producto.codigo>this.productos[mid_index-1].codigo){
                    console.log("entró");
                    this.productos.push(producto);
                    console.log(this.productos);
                    let aux= this.productos.length-1;
                    for(let i= this.productos.length-1; i>mid_index;i--){
                        this.productos[i]= this.productos[i-1];
                    }
                    this.productos[mid_index]=producto;
                }
                else if(this.productos[mid_index].codigo < producto.codigo){
                    this.productos.push(producto);

                }
            }
        }
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
        let left= 0;
        let right= this.productos.length-1;
        console.log('right ' + right);

        while(left <= right){
            var middle_index =Math.floor((left + right)/2);
            console.log('right ' + right);
            console.log('left ' + left);
            console.log('mid i ' + middle_index);
            let middle_value = this.productos[middle_index].codigo;
            console.log('mid v' + middle_value);

            if(codigo== middle_value){
                return this.productos[middle_index];
            }
            if (codigo < middle_value){
                right= middle_index -1;
            }
            else if (codigo > middle_value){
                left= middle_index +1;
            }
        }
        console.log('mid i ' + middle_index)
        return null;
    }

}


