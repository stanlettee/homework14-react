import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import { Button } from './components/Button'
import Loader from './components/Loader'
import { Modal } from './components/Modal'

export default class App extends Component {
  state = {
    search: '',
    load: 8,
    modal: false,
    object: {}
  }


  handleInput = (input) => {
    this.setState({ search: input })
  }

  loadButton = () => {
    if (this.state.search !== '') {
      this.setState((prevState) => ({ load: prevState.load + 8 }));
    } 
  }

  showModal = (galleryItem) => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
      object: galleryItem
    }))
  }

  closeModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
      object: {}
    }))
  }

  loadSet = () => {
    this.setState({load: 8})
  }

  render() {

    return (
      <div className="container">
        <Searchbar className="Searchbar" loadSet={this.loadSet} search={this.state.search} handleInput={this.handleInput}/>
        <ImageGallery  className="ImageGallery" loadSet={this.loadSet}  showModal={this.showModal} search={this.state.search} load={this.state.load}/>
        <Button loadButton={this.loadButton}/>
        {/* <Loader /> */}
        <Modal object={this.state.object} modal={this.state.modal} closeModal={this.closeModal}/>
      </div>
    )
  }
}
