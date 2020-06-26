import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class AuthorLayout extends Component {
    render() {
        var { allAuthor } = this.props
        const elm =  allAuthor.map((author, index)=>{
            return <tbody key={author.authorID} style={{verticalAlign:"middle"}} >
                    <tr>
                    <th scope="row" style={{verticalAlign:"middle"}}>{index+1}</th>
                    <td style={{verticalAlign:"middle"}} >
                        <img
                            alt="..."
                            className="img-rounded img-no-padding img-responsive"
                            src={author.authorImage}
                            style={{height:"88.96px",width:"70px"}}
                        />
                    </td>
                    <td style={{verticalAlign:"middle"}}>{author.name}</td>
                    <td style={{verticalAlign:"middle"}}>
                         <Button 
                            color="success" 
                            size="sm"
                            // onClick = {()=>this.DeleteFromCart(book.book)}
                        > Update </Button>
                    </td>
                    </tr>
                </tbody>
        })
        
        return (
            <>
                {elm}
            </>
        )
    }
}
