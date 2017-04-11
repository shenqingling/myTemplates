import React from 'react';
import PubSub from "pubsub-js";

export default class CommentEditor extends React.Component {
	buttonClick(){
		console.log('1111');
		PubSub.publish('123456789',{});
	}

	render() {
		return (
			<div>
				<p><a className="btn btn-primary btn-lg" href="#" role="button">contentss</a></p>
				<p><a className="btn btn-primary btn-lg" href="#" role="button">contentss</a></p>
				<p><a className="btn btn-primary btn-lg" href="#" role="button">contentss</a></p>
				<p><a className="btn btn-primary btn-lg" href="#" role="button">conte111ntss</a></p>
				<p><a className="btn btn-primary btn-lg" href="#" role="button">contentss</a></p>
				<p><a className="btn btn-primary btn-lg" href="#" role="button">con1tentss</a></p>
				<p><button type="button" className="btn btn-default" onClick={this.buttonClick.bind(this)}>（默认样式）Default</button></p>
    		</div>
		);
	}
}