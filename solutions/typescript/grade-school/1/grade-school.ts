export class GradeSchool {
  private _roster: Record<number, string[]> = {}
  add(name:string, grade:number) {
 for(const key in this._roster){
    this._roster[key] = this._roster[key].filter(student=>student !== name)
    if(this._roster[key].length === 0){
      delete this._roster[key]
    }
 }

 if(!this._roster[grade]){
  this._roster[grade]=[]
 }

 this._roster[grade].push(name)

 this._roster[grade].sort()

}

roster(){
  const copy:Record<number,string[]> = {}
  for(const [grade, students] of Object.entries(this._roster)){
    copy[Number(grade)] = [...students]
  }
  return copy
}

  grade(grade: number) {
    return this._roster[grade] ? [...this._roster[grade]] : []
  }
}
