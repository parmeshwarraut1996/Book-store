import React, { Component } from 'react';
import { AppBar } from '@material-ui/core'
import './dashboard.less'
import book from '../../assets/book.png'
import shoping from '../../assets/add_shopping.png'
class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard-container'>
                <AppBar id='appbar'>
                    <div className='icon-search'>
                        <img className="book" src={book} alt="book_icon" />
                        <input id='search' type="text" placeholder='Search'/>
                    </div>
                    <img id="add-shoping" src={shoping} alt='add_shoping'/>

                </AppBar>

            </div>
        );
    }
}

export default Dashboard;