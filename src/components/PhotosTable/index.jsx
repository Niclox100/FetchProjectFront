import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { getAPI } from "../../helpers/fetchAPI"
import { Pagination } from "../../helpers/Pagination"
import "./style.css"

const PhotosTable = ({token}) => {
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState([])
    const [fetchLimit, setFetchLimit] = useState(10)
    const [fetchOffset, setFetchOffset] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [photosPerPage] = useState(10)

    const photosUrl = `https://conexa-challenge-back-w8as.vercel.app/api/jphdata/photos?limit=${fetchLimit}&offset=${fetchOffset}`


    const fetchApi = async() => {
        setLoading(true)
        const apiData = await getAPI(photosUrl, token)
        setPhotos(apiData)
        setLoading(false)
        }

    
    const handleLimitAndOffset = async ()=> {
        setLoading(false)
        setFetchLimit(document.querySelector(".photo-fetchLimit").value);
        setFetchOffset(document.querySelector(".photo-fetchOffset").value);
        setLoading(true)
    }

    useEffect(()=> {
        fetchApi()
    }, [fetchLimit, fetchOffset])


    const indexOfLastPost = currentPage * photosPerPage;
    const indexOfFirstPost = indexOfLastPost - photosPerPage
    const currentPhotos = photos.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return(
    <section className="photosList-Container">
        <h2 className="photosList-title">Photos Fetch</h2>
        {loading ? <p>Cargando Informacion...</p>
        :
        <>
        <ul>
        {currentPhotos.map((photo)=> (
            <>
                <div className="photo-container" key={photo.id}>
                    <img src={photo.thumbnailUrl} alt="" />
                    <div className="photo-description">
                        <span>Album Id : {photo.albumId}</span>
                        <span>Id: {photo.id}</span>
                        <span>Titulo: {photo.title}</span>
                    </div>
                </div>
            </>
        ))}
        </ul>
        <Pagination entrysPerPage={photosPerPage} totalEntrys={photos.length} paginate={paginate}/>
        <div className="limit-offset-container">
            <input type="number" className="photo-fetchLimit" placeholder="Limite"/>
            <input type="number" className="photo-fetchOffset" placeholder="Offset"/>
            <button onClick={handleLimitAndOffset}>Establecer</button>
        </div></>
        }
    </section>
    )
}

export {PhotosTable}