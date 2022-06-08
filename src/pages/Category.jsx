import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {
    collection, getDocs, query, where, orderBy,
    limit, startAfter,
} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'
// import ListingItem from '../components/ListingItem'


const Category = () => {
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(true)
    const [lastFetchedListing, setLastFetchedListing] = useState(null)

    const params = useParams()

    useEffect(() => {
        const fetchListing = async () => {
            try {
                // Get reference
                const listingsRef = collection(db, 'listings')

                // Create a query
                const q = query(
                    listingsRef,
                    where('type', '==', params.categoryName),
                    orderBy('timestamp', 'desc'),
                    startAfter(lastFetchedListing),
                    limit(10)
                )

                // Execute query
                const querySnap = await getDocs(q)

                const listings = []
                querySnap.forEach((doc) => {
                    return listings.push({
                        id: doc.id,
                        data: doc.data(),
                    })
                })
                setListings(listings)
                setLoading(false)
            } catch (error) {
                toast.error('Could not fetch listings')
            }
        }
        fetchListing();
    }, [ params.categoryName])
    return (
        <div className='category'>
            <header>
                <p className='pageHeader'>
                    {params.categoryName === 'rent'
                        ? 'Places for rent'
                        : 'Places for sale'}
                </p>
            </header>

            {loading ? <Spinner/> : listings && listings.length > 0 ?
                <>
                    <main>
                       <ul className="categoryListings">
                           {listings.map((listing)=>(
                               <h3 key={listing.id}>{listing.data.name}</h3>
                           ))}
                       </ul>
                    </main>
                </> :
                <p>No Listing for {params.categoryName}</p>}

        </div>
    )
}

export default Category;