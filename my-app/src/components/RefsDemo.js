import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.emailRef = React.createRef()
        this.commentRef = React.createRef()
        this.language = React.createRef()
        this.checkstate = React.createRef();
        this.radiobj = {};
        for (var i = 0; i < 3; i++) {
            var sname = "gender" + i
            this.radiobj[sname] = React.createRef();
        }
        this.state = {
            langselect: 'React',
            ischecked: false,
            subject: '',
        };
    }

    changecheckhandler = () => {
        console.log(this.checkstate.current.checked)
        this.setState({ ischecked: this.checkstate.current.checked });
    }


    changeradiohandler = (event) => {
        for (var i = 0; i < 3; i++) {
            var statename = 'gender' + i;
            if (event.target.value != this.radiobj[statename].current.value) {
                this.radiobj[statename].current.checked = false;
            }
            else {
                this.state.subject = event.target.value;
            }
        }
    }

    componentDidMount() {
        this.emailRef.current.focus()
    }

    clickHandler = () => {
        console.log(this.emailRef.current.value)
        console.log(this.commentRef.current.value)
        console.log(this.language.current.value)
        console.log(this.checkstate.current.checked)
        console.log(this.state.subject);
    }

    render() {
        return (
            <>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="text" ref={this.emailRef} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment: </label>
                    <textarea id="comment" ref={this.commentRef}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language: </label>
                    <select ref={this.language}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="checkbox">Verify: </label>
                    <input type='checkbox' id='check' ref={this.checkstate} onChange={this.changecheckhandler} />
                    <div>
                        Checked {this.state.ischecked ? "yes" : "no"}
                    </div>
                </div>
                <br />
                <div>
                    <label htmlFor="radiobox">Male </label>
                    <input type='radio' id='radio' value='Male' ref={this.radiobj.gender0} onChange={this.changeradiohandler} />
                    <label htmlFor="radiobox">Female </label>
                    <input type='radio' id='radio' value='Female' ref={this.radiobj.gender1} onChange={this.changeradiohandler} />
                    <label htmlFor="radiobox">Other </label>
                    <input type='radio' id='radio' value='Other' ref={this.radiobj.gender2} onChange={this.changeradiohandler} />
                </div>
                <br />
                <button onClick={this.clickHandler}>Submit</button>
            </>
        )
    }
}

export default RefsDemo;