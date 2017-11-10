import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
           
            <div className="text-center">
                 <footer>
                <div className='row'>
                    <a href="https://github.com/israeladura" target='blank'>
                        <i className="fa fa-github fa-3x"></i>
                    </a>
                    <div className='row'>
                     <a href="https://twitter.com/aduraisrael"  target='blank'>
                        <i className="fa fa-twitter"></i>
                    </a>   | Crafted and Designed with 
                        <i className='fa fa-heart love'></i>
                         by
                        <a href="https://github.com/israeladura" id='name'>
                             Israel Adura
                        </a>
                    </div>
                </div>
                 </footer>
            </div>
        )
    }
}

export default Footer