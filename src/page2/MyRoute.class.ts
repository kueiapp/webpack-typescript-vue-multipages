class Params
{
	// members
	uid: string
	nationality: string
	constructor(uid:string,nationality:string ) 
	{
		this.uid = uid;
		this.nationality = nationality;
	}
}
export default class MyRoute
{
	// members
	fullPath: string;
	hash: string;
	matched:object
	meta:object
	name:string
	params:Params
	path:string
	query:object

  constructor(fullPath:string, hash:string, matched:object, meta:object, name:string, params:Params, path:string, query:object)
  {
  	this.fullPath = fullPath;
		this.hash = hash;
		this.matched = matched;
		this.meta = meta;
		this.name = name;
		this.params = params;
		this.path = path;
		this.query = query;
  }
}
