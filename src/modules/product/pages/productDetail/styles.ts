import { SxStyles } from "core/types/styles"

export const useStyles: SxStyles<
    'root' | 'backButton' | 'imageContainer' | 'thumbnailContainer' | 'thumbnail' | 'selectedThumbnail' | 'mainImageContainer' | 'mainImage' | 'descriptionContainer' | 'productTitle' | 'productPrice' | 'productInfo' | 'productDescription' | 'buttonsContainer' | 'buyButton' | 'cartButton'> = (() => {
        return {

            root: {
                padding: '20px',
                backgroundColor: '#f4f4f9',
                px: '200px',
            },
            backButton: {
                marginBottom: '20px',
                color: '#6C4D94',
            },
            imageContainer: {
                display: 'flex',
                gap: '20px',
            },
            thumbnailContainer: {
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            },
            thumbnail: {
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                cursor: 'pointer',
                transition: 'border 0.3s ease',
                borderRadius: '8px',
                '&:hover': {
                    border: '2px solid blue',
                },
            },
            selectedThumbnail: {
                border: '2px solid #B682FA',
            },
            mainImageContainer: {
                flex: 1,
                maxHeight: '400px',
                ml: '20px',
            },
            mainImage: {
                height: '200px',
                width: 'auto',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.02)',
                },
            },
            descriptionContainer: {
                padding: '30px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            },
            productTitle: {
                marginBottom: '10px',
                fontWeight: 'bold',
                color: '#333',
            },
            productPrice: {
                marginBottom: '15px',
                color: 'green',
            },
            productInfo: {
                marginBottom: '8px',
                color: '#555',
            },
            productDescription: {
                marginBottom: '20px',
                color: '#777',
            },
            buttonsContainer: {
                display: 'flex',
                gap: '10px',
            },
            buyButton: {
                flex: 1,
                fontWeight: 'bold',
                padding: '12px 20px',
            },
            cartButton: {
                flex: 1,
                padding: '12px 20px',
            },

        }
    }
    )()
