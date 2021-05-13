import React from 'react';

const Table = (props) => {
    return (
        <center>
            <div className="container">
                <div className="row col-md-6 col-md-offset-2 custyle">
                    <table className="table table-striped custab">
                        <thead>
                            <tr>
                                <th>Word</th>
                                <th>Frequency</th>
                            </tr>
                        </thead>
                        {props.data.map(e => {
                            return (
                                <tr>
                                    <td>{e[0]}</td>
                                    <td>{e[1]}</td>
                                </tr>
                            );
                        })}


                    </table>
                </div>
            </div>
        </center>
    );
};

export default Table;