import { useEffect, useState } from "react"
import { getAPI } from "../../helpers/fetchAPI"
import { Pagination } from "../../helpers/Pagination"
import "./style.css"

const PostsTable = ({token}) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    const postUrl = "https://fetchprojectback-ncolombo.vercel.app/api/jphdata/posts"

    const getApiData = async() => {
        setLoading(true)
        const apiData = await getAPI(postUrl, token)
        setPosts(apiData)
        setLoading(false)
        }

    useEffect(()=> {
        getApiData()
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return(
    <section className="postsList-Container">
        <h2 className="postList-title">Posts Fetch</h2>
        <ul>
            {currentPosts.map((post)=> (
                <>
                    <ul className="postsList-group">
                        <li><span>userId: {post.userId}</span></li>
                        <li><span>id: {post.id}</span></li>
                        <li><span>title: {post.title}</span></li>
                        <li><span>body: {post.body}</span></li>
                    </ul>
                </>
            ))}
        </ul>
        <Pagination entrysPerPage={postsPerPage} totalEntrys={posts.length} paginate={paginate} className="pagination"/>
    </section>
    )
}

export {PostsTable}