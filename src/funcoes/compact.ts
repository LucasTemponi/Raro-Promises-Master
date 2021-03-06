/**
 * Remove todos os valores "falsy" da lista de itens. Lembrando que false, 0, '',
 * null e undefined são valores falsy.
 * 
 * > Importante: O parâmetro "valores" não deve ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */
//  export const compact = (items: unknown[]): unknown[] => {

//   let temp:unknown[] = []
//   items.forEach((item,index)=>{
//     if (!!item){
//       temp.push(item);
//     }
//   })    
//   return temp;
// }

export const compact = (items: unknown[]): unknown[] => {
  return items.filter((item=>item));
}