import React from 'react'
import * as Forms from '../components/Forms'
import { withSocketContext } from '../contexts/SocketContext'

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: '',
                email: '',
                comment: '',
            },
        };
    }

    handleChange = e => {
        let {form} = this.state
        form[e.target.name] = e.target.value;
        this.setState({form: {...form}});
    }

    handleSubmit = e => {
        e.preventDefault();
        let {socket} = this.props;
        let {form} = this.state;
        socket.emit('comment added', form);
        form.comment='';
        this.setState({form: {...form}});
    }

    render() {
        let {form} = this.state;
        return (
            <div className="comment-form">
                <h3>Leave a Comment</h3>
                <form onSubmit={this.handleSubmit}>
                    <Forms.Input
                        name='name'
                        label='Your name'
                        placeholder='Phil Leggetter'
                        value={form.name}
                        type='text'
                        onChange={this.handleChange}
                        required
                    />
                    <Forms.Input
                        name='email'
                        label='Your email'
                        placeholder='phil.leggetter@gmail.com'
                        value={form.email}
                        onChange={this.handleChange}
                        type='mail'
                        required
                    />
                    <Forms.Textarea
                        name='comment'
                        label='Your Comment'
                        value={form.comment}
                        onChange={this.handleChange}
                        placeholder="Thanks Max! You've made all this possible ;)"
                        rows='4'
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Submit comment
                    </button>
                </form>
            </div>
        );
    }
}

export default withSocketContext(CommentForm);