import React, {Component} from 'react';
import "./List.css";


class List extends Component {
   
     
    render() {
        
        return (
                <div className="topdiv">
                        <div className="overflow-auto tab">
                            <table className="f6 w-100  center" cellSpacing="0">
                            <thead>
                                <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-white">Name</th>
                                <th className="fw6 tl pa3 bg-white">Username</th>
                                <th className="fw6 tl pa3 bg-white">Email</th>
                                <th className="fw6 tl pa3 bg-white">ID</th>
                                </tr>
                            </thead>
                            <tbody className="lh-copy">
                                <tr className="stripe-dark">
                                <td className="pa3">Hassan Johnson</td>
                                <td className="pa3">@hassan</td>
                                <td className="pa3">hassan@companywithalongdomain.co</td>
                                <td className="pa3">14419232532474</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                </div>                       
        );
    }
}

export default List;