import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            comment: '',
            language: 'vue',
            check: false,
            gender: '',
        }
    }

    changeEmailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    changeCommentHandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    changeLangHandler = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    changeCheckHandler = (event) => {
        this.setState({
            check: !this.state.check
        })
    }

    changeradiohandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input type="text" id="email" value={this.state.email} onChange={this.changeEmailHandler} />
                </div>
                <br />
                <div>
                    <label htmlFor='comment'>Comment: </label>
                    <textarea id="comment" value={this.state.comment} onChange={this.changeCommentHandler}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor='language'>Language: </label>
                    <select id='language' value={this.state.language} onChange={this.changeLangHandler}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor='checkbox'>Check: </label>
                    <input type="checkbox" id="check" value={this.state.check} onChange={this.changeCheckHandler} />
                    <div>
                      Checked {this.state.check ? "yes" : "no"}
                    </div>
                </div>
                <br />
                <div>
                    <label htmlFor='radiobox'>Male </label>
                    <input type='radio' id='radiobox' value='Male'  checked={this.state.gender === 'Male'} onChange={this.changeradiohandler}/>
                    <label htmlFor="radiobox">Female </label>
                    <input type='radio' id='radiobox' value='Female' checked={this.state.gender === 'Female'} onChange={this.changeradiohandler}/>
                    <label htmlFor="radiobox">Other </label>
                    <input type='radio' id='radiobox' value='Other' checked={this.state.gender === 'Other'}  onChange={this.changeradiohandler}/> 
                </div>
                <br />
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default DemoForm