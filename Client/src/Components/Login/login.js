import React from 'react';
import { Button } from 'react-bootstrap';

class Login extends React.Component {
    handleClick() {
        async function getData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
              method: 'GET', // *GET, POST, PUT, DELETE, etc.
              
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              //credentials: 'same-origin', // include, *same-origin, omit
              
              headers: {
                'Content-Type': 'application/json',
                //'Access-Control-Allow-Origin': '*'
                //'Access-Control-Allow-Headers': '*',
                //'Vary': 'Origin'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              //body: JSON.stringify(data) // body data type must match "Content-Type" header
            })
            //console.log(response); // parses JSON response into native JavaScript objects
            return response
          };
          
          getData('http://localhost:5000/Main').then(response => response.json() ).then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
          });
      }
    render() {
      return (
        <div>
          <Button variant="primary"
          onClick={()=> this.handleClick()}
          >Primary
          </Button>

        </div>
      );
    }
  }
  export default Login; 