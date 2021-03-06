import React, { Component } from 'react';



export class AddTodo extends Component {
    state = {
        title: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }

    onChange = (e) => this.setState({title: e.target.value})
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type='text' name='title' style={{flex: '10'}} placeholder='Add to-do' 
                value={this.state.value}
                onChange={this.onChange}
                />
                <input type='submit' value='submit' className='btn' style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddTodo