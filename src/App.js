import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button'
import Loader from './components/Loader'
import Modal from './components/Modal'

export default class App extends Component {
  state = {
    search: '',
    load: 8
  }

  handleInput = (input) => {
    this.setState({ search: input })
  }

  render() {
    return (
      <div className="container">
        <Searchbar className="Searchbar" search={this.state.search} handleInput={this.handleInput}/>
        <ImageGallery className="ImageGallery" search={this.state.search} load={this.state.load}/>
        {/* <Button />
        <Loader />
        <Modal /> */}
      </div>
    )
  }
}
