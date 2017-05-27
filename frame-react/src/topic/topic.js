import { Component } from 'react';

export default class Topic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        }
    }

    componentWillMount() {
        $.get('/v1/topic/list').done((data) => {
            let list = data.entity.list;
            this.setState({
                list
            })
        })
    }

    render() {
        let {list} = this.state;
        return <div>
                   topic
                   { list.map((item, i) => {
                         return <div key={ `topic_${i}` }>
                                    { item.title }
                                </div>
                     }) }
               </div>
    }
}