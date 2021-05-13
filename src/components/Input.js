import React, { useState, useEffect } from 'react';
import Table from './Table';

const Input = () => {

    // Fetch api
    const [text, setText] = useState('');
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/invictustech/test/main/README.md')
            .then(async response => await response.text())
            .then(async data => {
                await setText(data);
            });
    }, []);

    // Text to array of strings
    let arrayText = text.replace(/[^a-zA-Z ]/g, " ").split(" ");
    arrayText = arrayText.filter(function (el) {
        return el !== "";
    });
    arrayText = arrayText.map(name => name.toLowerCase());

    // Count Frequence of each word
    let counts = {};
    for (let i = 0; i < arrayText.length; i++) {
        let num = arrayText[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    // Sort the object according to count
    let sortable = [];
    for (let word in counts) {
        sortable.push([word, counts[word]]);
    }

    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });

    //On button click - find n word with most frequency count
    const [n, setN] = useState();

    let ans = [];

    function operation(number) {
        for (let i = 0; i < number; i++) {
            ans.push(sortable[i]);
        }
    }

    const [result, setResult] = useState([]);


    return (
        <>
            <div className="cotainer">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group row">
                                    <label for="n_id" className="col-md-4 col-form-label text-md-right">Enter N</label>
                                    <div className="col-md-6">
                                        <input type="number" id="n_id" className="form-control" name="n-name" onChange={(e) => setN(e.target.value)} required autofocus />
                                    </div>
                                </div>

                                <div className="col-md-6 offset-md-4">
                                    <button type="submit" className="btn btn-primary" onClick={() => {
                                        operation(n);
                                        setResult(ans);
                                        ans = [];
                                    }}>
                                        Get Frequency
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {result.length !== 0 ? <Table data={result} /> : null}
            <br />
        </>
    );
};

export default Input;