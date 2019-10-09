import React from 'react';

class Table extends React.Component {
    render() {
    const tableRows = this.props.data.map((contact, index) => {
        return (<tr key={index}>
            <td><img src={contact.pictureUrl} /></td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td><button onClick={() => this.props.clicked(index)}>Delete</button></td>
        </tr>) 
    });
        return(
            <table>
                <thead>
                    <tr>
                        <td>Picture</td>
                        <td>Name</td>
                        <td>Popularity</td>
                        <td>Action:</td>
                    </tr>
                </thead>
                <tbody>
                    { tableRows }
                </tbody>
            </table>
        )
    }
}

export default Table;