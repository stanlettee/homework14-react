import styles from './styles/ImageGallery.module.css'
import { Component } from 'react'
import { ImageGalleryItem } from './ImageGalleryItem'
import axios from 'axios'

export default class ImageGallery extends Component {
    state = {
        images: []
    }

    

    fetchImages = () => {
        console.log("FETCH STARTED with search:", this.props.search);
        axios.get(`https://pixabay.com/api/`, {
            params: {
                key: "50860863-3fd2c2b6f6ec06a8734a828e4",
                q: this.props.search,
                per_page: this.props.load
            }
        })
        .then(response => {
            this.setState({ images: response.data.hits }); 
            console.log(response.data.hits)
        })
        .catch(error => {
            console.error("API ERROR:", error.response);
        })
    }

    render() {
        if (this.props.search === '' ){
            return (
                <div className={styles.div}><h2 className={styles.title}>You haven't entered anything yet</h2></div>
            )
        } else {
            return (
                <ul className={styles.ImageGallery}>
                    <ImageGalleryItem images={this.state.images}/>
                </ul>
            )
        }

    }

    componentDidMount() {
        if (this.props.search !== '') {
            this.fetchImages()
        } 
    }

    componentDidUpdate(prevProps) {
        if (prevProps.search !== this.props.search) {
            this.fetchImages()
        }
    }

    componentWillUnmount() {
        this.setState({images: []})
    }
}