import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: any[],field:string,keywoed: string): any {
    if (!field || !keywoed){
      return list;
    }

    return list.filter(item=>{
      let itemFieldValue = item[field].toLowerCase();
      return itemFieldValue.indexOf(keywoed)>=0;
    })
  }

}
