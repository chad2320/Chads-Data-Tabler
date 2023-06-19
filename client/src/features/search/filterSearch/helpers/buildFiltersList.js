export function buildFiltersList(input){
    if(input){
    return Object.keys(input)
    .filter((item)=> 
    input[item].type === 'range' ||
    input[item].type === 'boolean' || 
    input[item].type === 'dropdown'
    ).map((item)=>input[item])
    .sort((a, b) =>b.type.toString()
    .localeCompare(a.type.toString()));
}}