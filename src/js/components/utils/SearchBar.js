import React from "react"

export default class Admin extends React.Component{

	constructor(){
		super()
		this.state = {
			searchBy: "",
			searchName: "",
			searchApproved: "",
		}

			handleApprovedClick(){
				this.setState({searchBy: "approved"})
				console.log(this.state)

			}


			handleNameClick(){
				this.setState({searchBy: "name"})
				console.log(this.state)

			}


			handleNameSearch(e){
				this.setState({searchName: e.target.value.toLowerCase().substr(0,20)})
				console.log(this.state)
			}

			handleApprovedSearch(e){
				this.setState({searchApproved: e.target.value})
				console.log(this.state)
			}
render(){
		let filteredItems = []
		if (this.state.searchBy === "name") {
		filteredItems = this.props.items.filter(
			(item) => {
				if(item.dish_name){
				return	item.dish_name.toLowerCase().indexOf(this.state.searchName) !== -1;
				}
				if(item.spot_name){
				return	item.spot_name.toLowerCase().indexOf(this.state.searchName) !== -1;
				}
			}
			)
		}
		else if (this.state.searchBy === "approved"){
		 filteredItems = this.props.items.filter(
			(item) => {
				return item.approved === true
			)
		}

		let patternNodes = filteredPatterns.map(function(pattern){
				return(
					<PatternListBox key={pattern._id}
					id={pattern._id}
					name={pattern.name}
					rows={pattern.rows}
					 description={pattern.description}
					 img={pattern.img}
					 rows={pattern.rows} />
					)
				})
}

return(
Filter by name:
<br/>
  <input type="text"
    value={this.state.searchName}
    onClick={this.handleNameClick.bind(this)}
    onChange={this.handleNameSearch.bind(this)} />
</div>
<div class="col-md-5">
    Filter by Type:
<br/>
    <select class="form-control" width="50%" value={this.state.searchType}
        onClick={this.handleTypeClick.bind(this)}
        onChange={this.handleTypeSearch.bind(this)}
        id="img">

          <option value="" disabled selected>Choose a type</option>
          <option value="knit2.png">Hat</option>
          <option value="scarf.jpg">Scarf</option>
          <option value="sweater.jpg">Sweater</option>
          <option value="socks.jpg">Socks</option>
          <option value="toy.jpg">Expensive knitted toy</option>
    </select>
</div>
</div>
)
