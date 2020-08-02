import React, { Component } from 'react'
import { InputGroup,InputGroupAddon,InputGroupText,Input, Form  } from 'reactstrap'
import { actSearchBookRequest } from 'redux/actions/FetchBookData'
import { connect } from 'react-redux'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            txtKeyWords:''
        }
    }
    onChange = e =>{
        var target = e.target
        var value = target.value
        var name = target.name
        this.setState({
            [name]: value
        })
    }
    onSubmit = e =>{
        e.preventDefault();
        this.props.searchBook(this.state.txtKeyWords)
    }
    render() {
        return (
            <div className="nav-link">
                <Form onSubmit = {this.onSubmit} >
                    <InputGroup >
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText style ={{background:'transparent'}}><i className="nc-icon nc-zoom-split"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input 
                            type="text" 
                            placeholder="search..." 
                            name = "txtKeyWords"
                            value = {this.state.txtKeyWords}
                            onChange={this.onChange}
                            style = {{background:"transparent"}}
                        />
                    </InputGroup>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        searchBook : keyWord =>{
            dispatch(actSearchBookRequest(keyWord))
        }
    }
}

export default connect(null, mapDispatchToProps) (SearchBar)
