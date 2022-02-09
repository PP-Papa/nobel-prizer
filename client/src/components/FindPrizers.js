import React from 'react';
import PageNavbar from './PageNavbar';
import '../style/FindPrizers.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class FindPrizers extends React.Component {
	constructor(props) {
		super(props);

		// State maintained by this React component is the inputted category,
		// and the list of Prizers of that category.
		this.state = {
			category: "",
			foundPrizers: []
		}

		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.submitCategory = this.submitCategory.bind(this);
	}

	handleCategoryChange(e) {
		this.setState({
			category: e.target.value
		});
	}
	
	submitCategory() {
		/* ---- Part 2 (FindPrizers) ---- */
		// TODO: (4) - Complete the fetch for this function
		// Hint: Name of category submitted is contained in `this.state.category`.
	    
		fetch("http://localhost:8081/prizers/"+this.state.category,
		{
			method: "GET"
		}).then(res => {
			return res.json();
		}, err => {
			console.log(err);
		}).then(PrizersList => {
			console.log(PrizersList); //displays your JSON object in the console
			let PrizersDivs = PrizersList.map((prizer, i) => 
				/* ---- Part 2 (FindPrizers) ---- */
				// TODO: (6) - Complete the HTML for this map function
				<div key={i} className="person">
					<div className="year">{prizer.year}</div>
					<div className="category">{prizer.category}</div>
					<div className="name">{prizer.firstname} {prizer.surname}</div>
				</div>);

			//This saves our HTML representation of the data into the state, which we can call in our render function
			this.setState({
				foundPrizers: PrizersDivs
			});
		});
	}

	
	render() {

		return (
			<div className="Recommendations">
				<PageNavbar active="FindPrizers" />

			    <div className="container recommendations-container">
					<br></br>
			    	<div className="jumbotron findFriend-headspace">
			    		<div className="h5">Search by Category</div>
						<div className="input-container">
			    			<input type='text' placeholder="medicine" value={this.state.login} onChange={this.handleCategoryChange} id="movieName" className="login-input"/>
							<button id="submitMovieBtn" className="submit-btn" onClick={this.submitCategory}>Submit</button>
			    		</div>
			    		<div className="header-container">
			    			<div className="headers">
			    				<div className="header"><strong>Year</strong></div>
			    				<div className="header"><strong>Category</strong></div>
								<div className="header"><strong>Name</strong></div>
			    			</div>
			    		</div>

			    		<div className="results-container" id="results">
			    			{this.state.foundPrizers}
			    		</div>
			    	</div>
			    </div>
		    </div>
		);
	}
}