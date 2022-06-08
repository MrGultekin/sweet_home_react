import {Link} from 'react-router-dom'
import {ReactComponent as DeleteIcon} from '../assets/svg/deleteIcon.svg'
import {ReactComponent as EditIcon} from '../assets/svg/editIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'


const ListingItem = ({listing, id}) => {
    return (
        <li className="categoryListing">
            <Link to={`/category/${listing.type}/${id}`} className='categoryListingLink'>

                <img src={listing.imgUrls[0]} alt={listing.name} className='categoryListingImg'/>

                <div className="categoryListingDetails">
                    <p className="categoryListingLocation"> {listing.location}</p>
                    <p className="categoryListingName">{listing.name}</p>

                    <p className="categoryListingPrice">

                                €{listing.offer ? listing.discountedPrice :listing.regularPrice}
                    </p>
                </div>
            </Link>
        </li>
    )
}

export default ListingItem;