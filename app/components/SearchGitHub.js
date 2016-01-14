var React = require('react');
var Router = require('react-router');

var SearchGitHub = React.createClass({
	mixins: [Router.History],

	getRef: function(ref){
		this.usernameRef = ref;
	},

	handleSubmit: function(){
		var username = this.usernameRef.value;
		this.username = "";
		this.history.pushState(null, "profile/" + username);
	},
	render: function(){
		return (
			<div className="col-sm-12">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group col-sm-7">
						<input type='text' className="form-control" ref={this.getRef} />
					</div>
					<div>
						<button type='submit' className="btn btn-block btn-primary">Search GitHub</button>
					</div>
				</form>
			</div>
		)
	}
});

module.exports = SearchGitHub;
