import { combineReducers } from 'redux';
import AllBook from './AllBook'
import BookCart from './BookCart'
import User from './User'
import AllAuthor from './AllAuthor'
import Category from './Category'

export default combineReducers({AllBook, BookCart, User, AllAuthor, Category});