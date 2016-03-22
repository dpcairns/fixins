import React from "react"
import RemoveButton from "./RemoveButton"

export default class GenresList extends React.Component{
	render(){
		let genresNodes = this.props.allGenres.map(function(genre){
			return(
				<li key={genre._id}>
					Name: {genre.genre_name}
					<RemoveButton type="Genre" id={genre._id}/>

				</li>
				)
		})
	return(
		<div>
			<ol>
			{genresNodes}
			</ol>
		</div>

		)

	}

}