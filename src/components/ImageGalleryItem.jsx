import styles from './styles/ImageGalleryItem.module.css'

export const ImageGalleryItem = ( {images} ) => {
    return (
        images.map((image, index) => {
            return <li key={index} className={styles.ImageGalleryItem}><img className={styles.ImageGalleryItemImage} src={image.webformatURL}/></li>
        })
    )
}