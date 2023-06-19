export function combineFiltersWithControls(search,controls){
    return {
      filters:{...search},
      controls:{
        limit:controls.limit,
        page:controls.page,
        sort1Path:controls.sort1.path,
        sort1Data:controls.sort1.val,
        sort2Path:controls.sort2.path,
        sort2Data:controls.sort2.val,
      } 
    }
}