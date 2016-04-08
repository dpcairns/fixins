import React from "react"
import RemoveButton from "./RemoveButton"
import { Link } from "react-router"
export default class GenresList extends React.Component{
	render(){
		let removeGenre = this.props.removeGenre
		let findAndChangeGenre = this.props.findAndChangeGenre
		let putOneGenreInState = this.props.putOneGenreInState
		let genresNodes = this.props.allGenres.map(function(genre){
			let genreId = genre._id

			return(
				<tr key={genreId}>
					<td onClick={putOneGenreInState.bind(this, genreId)}>
					<Link to={`/genre/${genreId}`}>Name: {genre.genre_name} 					</Link>
					</td>

					<td><RemoveButton removeGenre={removeGenre} type="Genre" id={genre._id}/></td>
				</tr>
				)
		})
	return(
		<div>
			<table className="table table-condensed table-bordered table-hover">
				<tbody>
						{genresNodes}
				</tbody>
			</table>
		</div>

		)

	}

}
