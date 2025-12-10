import styles from './styles/ImageGallery.module.css'
import { Component } from 'react'
import { ImageGalleryItem } from './ImageGalleryItem'
import axios from 'axios'
import Loader from './Loader'

export default class ImageGallery extends Component {
    state = {
        images: [],
        object: {},
        isLoading: false
    }

    changeObjectState = (galleryImage) => {
        this.props.showModal(galleryImage)
    }

    fetchImages = () => {
        this.setState({ isLoading: true });
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
        .finally(() => {
            this.setState({ isLoading: false });
        });
    }

    render() {
        if (this.props.search === '' ){
            return (
                <div className={styles.div}><h2 className={styles.title}>You haven't entered anything yet</h2></div>
            )
        } else {
            return (<>
                
                <ul className={styles.ImageGallery}>
                    <ImageGalleryItem changeObjectState={this.changeObjectState} images={this.state.images}/>
                </ul>
                {this.state.isLoading && <Loader />}
            </>)
        }

    }

    componentDidMount() {
        if (this.props.search !== '') {
            this.fetchImages()
        } 
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.search !== this.props.search) {
            this.fetchImages()
            this.props.loadSet()
        }

        if (prevProps.load !== this.props.load) {
            this.fetchImages()
        }

    }

}