import { combineReducers } from 'redux';
import AllBook from './AllBook'
import BookCart from './BookCart'
import User from './User'
import AllAuthor from './AllAuthor'
import Category from './Category'
import Auth from './Auth'
import Favorite from './FavoriteList'

export default combineReducers({AllBook, BookCart, User, AllAuthor, Category, Auth, Favorite});