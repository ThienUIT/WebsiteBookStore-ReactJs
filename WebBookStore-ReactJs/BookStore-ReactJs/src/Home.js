import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes"
import { Container } from "reactstrap";

export default class Home extends React.Component 
{
    render() 
    {
        return (
            <Router>   
            { this.showContent(routes) }
            </Router>
            )
      
    }
    showContent= (routes) => {
        var result=null;
        if(routes.length > 0)
        {
            result=routes.map((route,index)=>{
                return(<Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}/>
                    );
            });
        }
        return <Switch>{result}</Switch>;
    }
}